<template>
    <el-page-header @back="goBack()" title="返回">
        <template #content>
            <div class="flex items-center">
                <el-avatar :size="32" class="mr-3"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </div>
        </template>
        <template #extra>
            <div class="flex items-center">
                <div class="return">
                    <slot name="return">
                        returnHouse
                    </slot>
                </div>
                <component class="user" v-if="!props.ifLogin" :is="User" :getOnline="getOnline" />
                <slot name="login">
                    <el-button v-if="props.ifLogin">登陆/注册</el-button>
                </slot>
            </div>
        </template>
    </el-page-header>
</template>
<script lang="ts" setup>
import 'element-plus/dist/index.css';
import {
    ElButton,
    ElPageHeader,
    ElAvatar,
    ElTag,
    ElAffix
} from 'element-plus'
import {
    School
} from '@element-plus/icons-vue'
import User from '../components/User.vue'
import router from '../router';
const props = defineProps({
    ifLogin: Boolean,
    getOnline: {
        type: Function,
        default: Function,
        required: true,
    }
})
const getOnline = function () {
    props.getOnline();
}
defineExpose({ getOnline })
const goBack = function () {
    router.go(-1);
}
</script>
<style>
.user {
    left: 200px;
}

.el-page-header__back {
    background-color: orange;
}

.return {
    position: absolute;
    left: 155px;
    top: 12.5px
}


.el-page-header__header {
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    margin-top: 0;
}

.el-header {
    padding: 0;
}

body {
    background-image: none;
}
</style>