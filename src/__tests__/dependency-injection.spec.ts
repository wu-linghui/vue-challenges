import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "../views/father.vue"

describe("Dependency Injection", () => {
  it("should work'", () => {
    const wrapper = mount(App)
    expect(wrapper.vm.$el.textContent).toBe("1")
  })
})