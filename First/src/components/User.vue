<template>
    <div id="user">
        <n-dropdown :options="options" :on-select="select">
            <slot name="userAvatar">
                <div class="flex items-center">
                    <el-icon size="25px" style="top:5px">
                        <User />
                    </el-icon>
                </div>
            </slot>
        </n-dropdown>
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
import 'element-plus/dist/index.css';
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import { h, defineComponent, defineProps, onMounted } from 'vue'
import type { Component } from 'vue'
import { NIcon, NDropdown, NButton, DropdownOption } from 'naive-ui'
import { write } from 'fs'
import { methodOf } from 'lodash'
import { te, th } from 'date-fns/locale'
import router from '../router'
import axios from 'axios'
import {
    ElIcon
} from 'element-plus'
import {
    User
} from '@element-plus/icons-vue'
onMounted(() => {
    axios.defaults.withCredentials = true;
})
const renderIcon = (icon: Component) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        })
    }
}
const props = defineProps({
    getOnline: {
        type: Function,
        default: Function,
        required: true,
    }
})
const select = function (key: string | number, option: DropdownOption) {
    if (key === 'profile') {
        router.push('/Person')
    }
    else if (key === 'editProfile') {
        router.push('/Edit')
    }
    else if (key === 'logout') {
        //删除cookie
        axios.get("../E-MUSEUM/notOnline", {
        }).then((res) => {
            if (res.data === 'OK') {
                /**
                 * 清除历史记录
                 */
                let routeHistory = history.length - 1;
                if (routeHistory > 1) {
                    router.go(-routeHistory + 1);
                }
                router.push('/')
                props.getOnline()
            }
        })
    }
}
const options = [
    {
        label: '用户资料',
        key: 'profile',
        icon: renderIcon(UserIcon),
    },
    {
        label: '编辑用户资料',
        key: 'editProfile',
        icon: renderIcon(EditIcon),
    },
    {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon(LogoutIcon),
    }
]
</script>
<style>
#user {
    position: absolute;
    background-color: inherit;
    height: 20px;
    width: 80px;
    top: 8px
}

.user_button {
    background-color: #fff;
    color: orange;
}
</style>