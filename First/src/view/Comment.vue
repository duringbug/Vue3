<template>
    <h2>Comment.vue</h2>
    <Input @send="send"></Input>
    {{ msg }}
</template>
<script lang="ts" setup>
import { ms } from 'date-fns/locale';
import { emit } from 'process';
import { ref } from 'vue';
import Input from '../components/Input.vue';
import { useWebSocket } from '../hooks';
const msg = ref('')
const ws = useWebSocket(handleMessage);
const send = (v: string) => {
    msg.value = v;
    //ws传数据
    if (msg.value != '') {
        ws.send(JSON.stringify({
            msg: msg
        }))
    }
}
//ws收数据
function handleMessage(this: WebSocket, ev: Event) {
    console.log(ev)
}
</script>
<style>

</style>