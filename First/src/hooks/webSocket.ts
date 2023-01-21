import { WS_URl } from "../configs";
function useWebSocket(handleMassage: (this: WebSocket, ev: MessageEvent<any>) => any) {
    const ws = new WebSocket(WS_URl);
    const init = () => {
        bindEvent();
    }
    function bindEvent() {
        ws.addEventListener('open', handleOpen, false)
        ws.addEventListener('close', handleClose, false)
        ws.addEventListener('error', handleError, false)
        ws.addEventListener('message', handleMassage, false)
    }
    init();
    return ws;
}
export default useWebSocket

function handleOpen(this: WebSocket, ev: Event) {
    console.log(ev)
}
function handleClose(this: WebSocket, ev: CloseEvent) {
    console.log(ev)
}
function handleError(this: WebSocket, ev: Event) {
    console.log(ev)

}

