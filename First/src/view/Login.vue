<template>
    <div class="login">
        <el-form :model="form" label-width="120px">
            <el-form-item label="昵称">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="QQ邮箱">
                <el-input v-model="form.qqMail" />
            </el-form-item>
            <el-form-item label="生日">
                <el-col :span="11">
                    <el-date-picker v-model="form.date1" type="date" style="width: 100%" />
                </el-col>
            </el-form-item>
            <el-form-item label="兴趣爱好">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="博客" name="type" />
                    <el-checkbox label="生活" name="type" />
                    <el-checkbox label="科技" name="type" />
                    <el-checkbox label="体育" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item label="请阅读注册需知">
                <el-switch v-model="form.delivery" @change="drawer = true" />
            </el-form-item>
            <el-form-item>
                <router-link to="/">
                    <el-button type="primary" @click="onSubmit()">提交</el-button>
                    <el-button type="primary" @click="sendMail()">获取验证码</el-button>
                </router-link>
            </el-form-item>
            <el-divider />
            <router-link to="/Register">点击注册</router-link>
        </el-form>
        <div v-if="show">
            <el-alert title="提交成功" type="success" @close="hello" show-icon effect="dark" />
        </div>
        <div v-else-if="mail">
            <el-alert title="验证码已发送至邮箱" type="success" @close="hello" show-icon effect="dark" />
        </div>
        <el-drawer v-model="drawer" title="I am the title" :with-header="false">
            <span>Hi there!</span>
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import 'element-plus/dist/index.css';
import Register from './Register.vue';
import {
    ElFormItem,
    ElInput,
    ElButton,
    ElForm,
    ElCol,
    ElDatePicker,
    ElSelect,
    ElOption,
    ElSwitch,
    ElTimePicker,
    ElCheckbox,
    ElCheckboxGroup,
    ElRadio,
    ElRadioGroup,
    ElAlert,
    ElDrawer,
    ElDivider
} from 'element-plus'
import axios from 'axios';
import { routerKey } from 'vue-router';
import router from '../router';
onMounted(() => {
    axios.defaults.withCredentials = true;
})
// do not use same name with ref
const form = reactive({
    name: '',
    qqMail: '',
    date1: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const hello = () => {
}
const onSubmit = () => {
    console.log('submit!')
    console.log(form)
    console.log(show)
    show.value = true
    axios.post("../E-MUSEUM/Login/", {
        params: {
        }
    }).then((res) => {
        console.log(res)
        props.getOnline()
    })
}
const sendMail = () => {
    mail.value = true
}
let show = ref(false);
let mail = ref(false);
let drawer = ref(false);
//子调父组件方法
const props = defineProps({
    getOnline: {
        type: Function,
        default: Function,
        required: true,
    }
})
</script>
<style>
/* body {
    background-image: url(../assets/login.jpg);
    background-size: 100% 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
} */

.login {
    padding: 10px;
    width: 500px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    border: solid orange;
    background-color: rgb(135, 206, 250, 0.2);
}

.el-input__wrapper {
    background-color: transparent;
}

.el-input__inner {
    background-color: transparent;
}

.el-form-item__label {
    color: #409eff;
    font-weight: 900;
}
</style>