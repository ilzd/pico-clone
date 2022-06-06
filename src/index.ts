import Phaser from 'phaser';
import config from './game-config';
import io from 'socket.io-client';
import SocketMessageTypeEnum from './model/enum/socket-message-type-enum';
import environment from './environment';

const game = new Phaser.Game(config);

const IO = io(environment.SOCKET_URL);

IO.on(SocketMessageTypeEnum.CONNECTION, (socket) => {
  console.log('socket connected')

  IO.on(SocketMessageTypeEnum.DISCONNECT, () => {
    console.log('socket disconnected');
  });
})

IO.on(SocketMessageTypeEnum.CONNECT_ERROR, () => {
  console.log('connection error')
})

IO.on(SocketMessageTypeEnum.RECONNECTING, () => {
  console.log('reconnecting to socket')
})

IO.on(SocketMessageTypeEnum.RECONNECT_ATTEMPT, () => {
  console.log('attempting to reconnect to socket')
})

IO.on(SocketMessageTypeEnum.RECONNECT_ERROR, () => {
  console.log('an error has ocurred while trying to reconnect to socket')
})

IO.on(SocketMessageTypeEnum.RECONNECT_FAILED, () => {
  console.log('socket reconnection failed')
})