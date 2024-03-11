<script setup>
import { ref } from 'vue'

const showDrawer = ref(false)
const showThankYou = ref(false)
</script>

<template>
    <div class="caption mb4">This example is using Wave UI 3.x.</div>
    <w-card title="Wave UI demo" title-class="light-blue-light5--bg">
        <template #title>
            <w-icon xl color="teal-dark1">wi-wave</w-icon>
            <div class="title2 ml2 text-light">Wave UI demo</div>
            <div class="spacer"></div>
            <w-button @click="showDrawer = true" outline>
                Toggle drawer
            </w-button>
        </template>

        <p>This is a simple demo showcasing various UI components and framework CSS classes.</p>
        <p>For a demo with vue-cli, you can check <a href="https://github.com/antoniandre/vue3-waveui"
                target="_blank">this
                repo</a>.</p>
        <div class="title3 mt6 mb2">Give us your feedback!</div>
        <w-rating @input="$waveui.notify('Thank you', 'success', 2000)"></w-rating>
    </w-card>

    <w-drawer v-model="showDrawer" content-class="d-block">
        <w-button @click="showDrawer = false" sm outline round absolute icon="wi-cross">
        </w-button>
    </w-drawer>
    <QRCodeVue3 />
    <div>
        <QRCodeVue3 :width="200" :height="200" image="../public/favicon.ico" value="http://192.168.10.101:8000"
            :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
            :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }" :dotsOptions="{
                type: 'dots',
                color: '#26249a',
                gradient: {
                    type: 'linear',
                    rotation: 0,
                    colorStops: [
                        { offset: 0, color: '#26249a' },
                        { offset: 1, color: '#26249a' },
                    ],
                },
            }" :backgroundOptions="{ color: '#ffffff' }" :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
            :cornersDotOptions="{ type: undefined, color: '#000000' }" fileExt="png" myclass="my-qur"
            imgclass="img-qr" />
    </div>
</template>
<script>
import QRCodeVue3 from "qrcode-vue3";

export default {
    name: 'QRCodeVue3Example',
    components: {
        QRCodeVue3
    },
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
