import { expect, test } from 'vitest'
import { card } from './card'

test('card', () => {
  expect(card().className).toBe('m-2 rounded')
})
