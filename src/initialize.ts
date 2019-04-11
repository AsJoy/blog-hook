import { handleError, isTrustedError } from '@/util/apperror'

process.on('unhandledRejection', reason => { // 拦截未处理的promise rejection
    throw reason
})
process.on('uncaughtException', error => {
    handleError(error)
    if (!isTrustedError(error)) { process.exit(1) }
})
interface Interface11 {
    qwee: string
}
