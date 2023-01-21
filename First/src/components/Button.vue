<template>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
        <el-button circle>
            <ElIcon>
                <Search />
            </ElIcon>
        </el-button>
        <el-button type="primary" circle>
            <ElIcon>
                <Edit />
            </ElIcon>
        </el-button>
        <el-button type="success" circle>
            <ElIcon>
                <Check />
            </ElIcon>
        </el-button>
        <el-button type="info" circle @click="test()">
            <ElIcon>
                <Message />
            </ElIcon>
        </el-button>
        <el-button type="warning" circle>
            <ElIcon>
                <Star />
            </ElIcon>
        </el-button>
        <el-button type="danger" circle>
            <ElIcon>
                <Delete />
            </ElIcon>
        </el-button>
    </el-row>
    <el-switch v-model="value1" class="tjf1" @change="test1()" />
    <el-switch v-model="value2" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
</template>
<script lang="ts">
import { ref } from 'vue';
import { ElSwitch, ElRow, ElButton, ElIcon } from 'element-plus';
import 'element-plus/dist/index.css';
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
    Share
} from '@element-plus/icons-vue'
export default {
    setup() {

    },
    data() {
        return {
            value1: true,
            value2: true
        }
    },
    methods: {
        test: function () {
            this.$router.push('/')
        },
        test1: function () {
            console.log("+++++++++")
        }
    },
    components: {
        ElSwitch,
        ElRow,
        ElButton,
        ElIcon,
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
        Share
    }
}
</script>
<style>
.tjf1 {
    margin-right: 10px;
}
</style>