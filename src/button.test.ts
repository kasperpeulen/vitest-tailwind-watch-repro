import { expect, test } from 'vitest'
import { button } from './button'

test('button', () => {
  expect(button().className).toBe('p-4 underline')
})
