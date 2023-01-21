const webSocket = require('ws')
    ; ((ws) => {
        const server = new ws.server({ port: 9229 });
        const init = () => {
            bindEvent();
        };
        function bindEvent() {
            server.on('open', handleOpen);
            server.on('close', handleClose);
            server.on('erorr', handleError);
            server.on('connection', handleConnection);
        }
        function handleOpen(this: WebSocket, ev: Event) {
            console.log(ev)
        }
        function handleClose(this: WebSocket, ev: CloseEvent) {
            console.log(ev)
        }
        function handleError(this: WebSocket, ev: Event) {
            console.log(ev)
        }
        function handleConnection(ws: { on: (arg0: string, arg1: (msg: any) => void) => void; }) {
            console.log(ws);
            ws.on('message', handleMessage);
        }
        function handleMessage(msg: any) {
            server.clients.forEach((c) => {
                c.send(msg)
            })
        }
        init();
    })(webSocket);