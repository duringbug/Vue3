<template>
    <slot name="Main">
        <el-main>
            <Carouel></Carouel>
            <Carouel></Carouel>
            <Carouel></Carouel>
            <Carouel></Carouel>
            <Carouel></Carouel>
        </el-main>
    </slot>

</template>
<script lang="ts" setup>
import 'element-plus/dist/index.css';
import {
    ElMain,
} from 'element-plus'
import Carouel from '../components/Carouel.vue'
import {
    NScrollbar
} from 'naive-ui'
</script>
<style>

</style>