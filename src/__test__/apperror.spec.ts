import path = require("path");
process.env["NODE_CONFIG_DIR"] = path.resolve(__dirname, "../../config");
process.env['NODE_ENV'] = ''

import { createAppError } from '../util/apperror'

describe('test error handler', () => {
  it('should be throw error', function () {
    expect(() => {
      throw createAppError({
        message: 'hello message'
      })
    }).toThrow('hello message')
  });
  it('should be stacked no constructor', function () {
    const appError = createAppError({
      message: 'error accor',
    })
    expect(appError.message).not.toMatch('apperror.ts')
  });
})
