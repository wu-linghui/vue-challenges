
import { describe, it, expect } from "vitest"

import AppRaw from "../views/demo/dynamic-css-values.vue?raw"

describe("DomPortal", () => {
  it("render to body", () => {
    expect(AppRaw).toContain(atob("Y29sb3I6IHYtYmluZCh0aGVtZSk="))
  })
})