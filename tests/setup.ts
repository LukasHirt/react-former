import { vi, beforeEach, expect, afterEach } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

expect.extend(matchers)

beforeEach(() => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: false })
})

afterEach(() => {
  cleanup()
})
