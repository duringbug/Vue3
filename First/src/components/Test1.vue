<template>
    <!-- <div id="test1"></div> -->
    <div class="head1">
        <RouterLink to="/Person:online?">
            <n-avatar class="toxiang" :size=44 src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <div class="username">
                username
            </div>
        </RouterLink>
    </div>
    <RouterView name="Person"></RouterView>
</template>
<script lang="ts">
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import 'animate.css/animate.min.css' //引入
import { toRaw } from "@vue/reactivity";
import { NAvatar } from 'naive-ui';
import { zhCN, dateZhCN } from 'naive-ui';
export default {
    data() {
        return {
            camera: null as any,
            scene: null as any,
            axesHelper: null as any,
            renderer: null as any,
            mesh: null as any,
            controls: null as any,
        };
    },
    mounted() {
        this.init();
        this.animate();
    },
    methods: {
        //初始化
        init: function () {
            const sizes = {
                width: 800,
                height: 600
            }
            this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
            this.scene = new THREE.Scene();
            this.axesHelper = new THREE.AxesHelper(50);
            this.renderer = new THREE.WebGLRenderer();
            this.mesh = new THREE.Mesh(
                new THREE.BoxGeometry(4, 2, 2),
                new THREE.MeshBasicMaterial({ color: "yellow" })
            );
            console.log(this.scene)
            this.camera.position.set(10, 10, 10);
            this.mesh.position.set(0, 0, 0);
            this.scene.add(this.mesh);
            this.scene.add(this.axesHelper);
            this.scene.add(this.camera);
            this.renderer.setSize(sizes.width, sizes.height);
        },

        // 动画
        animate: function () {
            document.getElementById('test1')?.appendChild(this.renderer.domElement);
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            const clock = new THREE.Clock();
            const tick = () => {
                let elapsed_time = clock.getElapsedTime();
                let delta_time = clock.getDelta();
                this.controls.update();
                this.mesh.rotation.set(elapsed_time, 0, 0)
                this.renderer.render(toRaw(this.scene), this.camera);
                window.requestAnimationFrame(tick);
            }
            tick();
        },
    },
    components: {
        zhCN, dateZhCN, NAvatar
    }
};
</script>
<style>
.head1 {
    height: 50px;
    background-color: orange;
    position: relative;
}

.toxiang {
    position: absolute;
    right: 110px;
    margin-top: 3px;
}

.username {
    display: inline-block;
    height: 50px;
    font-size: 20px;
    margin-top: 5px;
    width: 70px;
    position: absolute;
    right: 20px;
}

#test1 {
    height: 600px;
    width: 800px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>