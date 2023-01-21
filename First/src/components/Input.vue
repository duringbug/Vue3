<template>
    <el-input v-model="input" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="Please input" />
    <el-button @click="send()">发送</el-button>
</template>
<script lang="ts" setup>
import 'element-plus/dist/index.css';
import {
    ElInput,
    ElButton
} from "element-plus"
import { ref } from 'vue';
import { type } from 'os';
import { emit } from 'process';
const input = ref('')
const emits = defineEmits(['send'])
const send = () => {
    emits('send', input)
}
</script>
<style>

</style>