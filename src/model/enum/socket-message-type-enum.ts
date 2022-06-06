enum SocketMessageTypeEnum {
  CONNECTION = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error',
  RECONNECT_ATTEMPT = 'reconnect_attempt',
  RECONNECTING = 'reconnecting',
  RECONNECT_ERROR = 'reconnect_error',
  RECONNECT_FAILED = 'reconnect_failed'
}

export default SocketMessageTypeEnum