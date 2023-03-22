http.get(options, (res) => {
    // Do stuff
  }).on('socket', (socket) => {
    socket.emit('agentRemove');
  });
  console.log("this is http server side ")
  myEmitter.emit('WaterFull');