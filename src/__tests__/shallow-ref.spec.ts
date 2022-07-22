import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import App from "../views/demo/shallow-ref.vue"

describe("shallowRef", () => {
  it("should work", () => {
    const spy = vi.spyOn(console, "log")
    mount(App)
    expect(spy).toHaveBeenCalled()
  })
})