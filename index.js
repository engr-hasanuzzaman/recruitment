'use_strict'

const Hapi = require('hapi');
const server = Hapi.server({
  host: 'localhost',
  port: 8080
});

server.rules({
  method:'GET',
  path:'/hello',
  handler:function(request,h) {

      return'hello world';
  }
})

async function start(){
  try {
    await server.start();
  } catch (err) {
    console.log('encounter err that is ', err);
    process.exit(1);
  }

  console.log('server running at: ', server.info.uri);
}

start();