import { resolve } from 'path'
import { readFileSync, readdirSync, writeFileSync } from 'fs'
// import MagicString from 'magic-string'
// import { copy, ensureDirSync } from 'fs-extra'
// import fg from 'fast-glob'
import { NL } from '@alexzzz/nl'
import Inquirer from 'inquirer'
// import { injectMessage, normalizeCount } from './helper'
import type { NeededInfo } from './types'

const logger = new NL()

const withRoot = (url: string) => resolve(process.cwd(), url)
const withTarget = (url: string) => withRoot(`src/${url}`)

async function ask(): Promise<NeededInfo> {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'what\'s this practice\'s name?',
    }
  ] as Inquirer.Question[]
  const { name } = await Inquirer.prompt(questions)
  return {
    name
  }
}

async function create(info:NeededInfo): Promise<void> {
  writeFileSync(withTarget(`views/demo/${info.name}.vue`), "")
  writeFileSync(withTarget(`__tests__/${info.name}.spec.ts`), "")
}

const withCatch = async (fn: (...args: any[]) => void, ...args: any[]) => {
  try {
    fn(...args)
  }
  catch (error) {
    logger.err(`fail cause: ${error}`)
  }
}

async function main() {
  withCatch(async () => {
    const info = await ask()
    await create(info)
    logger.end('create success')
  })
}

main()
