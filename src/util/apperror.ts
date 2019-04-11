import logger = require('./logconfig')

interface AppErrorProps {
    type?: string
    message?: string
    detail?: string
    errorCode?: number
    extendedInfo?: string
    isOperational?: boolean
}

export class AppError extends Error {
    isAppError = true

    name = 'AppError'

    type

    detail

    extendedInfo

    errorCode

    isOperational = false

    /**
   *
   * @param props
   * @param implementationContext 选择忽略异常构造函数内部
   */
    constructor(props: AppErrorProps, implementationContext?: Function) {
      super()
      this.type = (props.type || 'Application')
      this.message = (props.message || 'An error occurred.')
      this.detail = (props.detail || '')
      this.extendedInfo = (props.extendedInfo || '')
      this.errorCode = (props.errorCode || -1)
      this.isOperational = (props.isOperational || false)
      Error.captureStackTrace(this, (implementationContext || AppError))
    }
}

export function createAppError(props: AppErrorProps = {}) {
  return new AppError(props, createAppError)
}

export const handleError = function(error) {
  return logger.error(error)
}

export const isTrustedError = function(error) {
  return error.isOperational
}
