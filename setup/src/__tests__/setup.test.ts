import { command, description, builder, handler } from '../setup'

test('standard exports', () => {
  expect(command).toEqual('goTrue')
  expect(description).toMatch(/goTrue/)
  expect(typeof builder).toEqual('function')
  expect(typeof handler).toEqual('function')
})
