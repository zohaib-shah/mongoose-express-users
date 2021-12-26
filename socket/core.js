class SocketClass {
    onConnection(socket){
        console.log("Connected");
    }
}
module.exports = new SocketClass();