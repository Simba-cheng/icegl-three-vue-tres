<!--
 * @Description: 
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2024-05-28 09:22:40
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-03-17 14:51:28
-->

<template>
    <Suspense>
        <loading useResourceManager />
    </Suspense>
    <TresCanvas v-bind="state">
        <OrbitControls />
        <TresPerspectiveCamera ref="cameraRef" uuid="1c22773e-eb46-4708-b3bd-2baf29ac5cb3" name="Camera" />
        <Suspense>
            <sceneCom v-if="Resource.hasAllFinished.value" />
        </Suspense>
        <effectCom />
    </TresCanvas>
    <viewChart :dataJson="dataJson" :showAllCom="Resource.hasAllFinished.value" :delay="600" :maskWidth="560" />
</template>
<script setup lang="ts">
import * as THREE from 'three'
import { reactive, watch, ref, Suspense } from 'vue'
import { OrbitControls } from '@tresjs/cientos'
import { loading2 as loading } from 'PLS/UIdemo'
import { viewChart } from 'PLS/goView'
import { Resource } from 'PLS/resourceManager'
import { JsonLoader, ZipLoader } from 'PLS/tresEditor'
import sceneCom from '../components/alternator/scene.vue'
import effectCom from '../components/alternator/effect.vue'
import dataJson from '../components/alternator/alternatorGoView.json'

const state = reactive({
    clearColor: '#201919',
    windowSize: true,
    antialias: true,
    shadows: true,
    shadowMapType: 1,
    toneMapping: 4,
    toneMappingExposure: 1,
    renderMode: 'manual',
})

const cameraConfig = {
    metadata: { version: 4.6, type: 'Object', generator: 'Object3D.toJSON' },
    object: {
        type: 'PerspectiveCamera',
        name: 'Camera',
        layers: 1,
        matrix: [
            0.913136019977033, -1.3877787807814457e-17, 0.4076550122597582, 0, 0.14727121903745338, 0.9324634451239355, -0.3298834817792847, 0,
            -0.3801233971537743, 0.3612643402103247, 0.851465959054543, 0, -3.2597835600761362, 3.636647435981188, 6.776103699335103, 1,
        ],
        up: [0, 1, 0],
        fov: 50,
        zoom: 1,
        near: 0.01,
        far: 1000,
        focus: 10,
        aspect: 1.262730627306273,
        filmGauge: 35,
        filmOffset: 0,
    },
}
const loader = new THREE.ObjectLoader()
const cameraObject = loader.parse(cameraConfig)
const cameraRef = ref(null) as any
watch(
    () => cameraRef.value,
    (val) => {
        val && val.copy(cameraObject)
    },
)
Resource.loaderMapping.JsonLoader = JsonLoader
Resource.loaderMapping.ZipLoader = ZipLoader
Resource.loadResources([
    { functionName: 'JsonLoader', url: './plugins/industry4/alternator/json/scene.json' },
    {
        functionName: 'ZipLoader',
        url:
            (process.env.NODE_ENV === 'development' ? 'resource.cos' : 'https://opensource.cdn.icegl.cn') +
            '/model/industry4/alternator/geometries.zip',
    },
    { functionName: 'ZipLoader', url: './plugins/industry4/alternator/images.zip' },
])
</script>
