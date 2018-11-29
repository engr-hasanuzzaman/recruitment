'use_strict'

const Hapi = require('hapi');
const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, h) {
        request.log('with in handler');
        return 'hello world';
    }
})

server.route({
    method: 'GET',
    path: '/posts',
    handler: function(req, h) {
        const posts = [{ title: 'Name', age: 23 }, { title: 'Name', age: 23 }, { title: 'Name', age: 23 }]
        return posts;
    }
})

async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log('encounter err that is ', err);
        process.exit(1);
    }

    console.log('server running at: ', server.info.uri);
}

start();