<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts" setup>
import {
    ElBreadcrumbItem,
    ElBreadcrumb,
} from 'element-plus'
</script>
<style>

</style>