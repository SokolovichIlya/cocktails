<template>
    <div class="wrapper">
        <TheHeader @change="onChangeIsOpenSidebar" :is-open-sidebar="isOpenSidebar" />
        <div class="wrapper-content">
            <TheSidebar :is-open-sidebar="isOpenSidebar" />
            <div class="content">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TheSidebar from './components/TheSidebar.vue'
import TheHeader from './components/TheHeader.vue'

const route = useRoute()
let isOpenSidebar = ref<boolean>(false)

function onChangeIsOpenSidebar() {
    isOpenSidebar.value = !isOpenSidebar.value
}

watch(() => route.path, () => {
    setTimeout(() => {
        if (isOpenSidebar.value) {
            onChangeIsOpenSidebar()
        }
    }, 300)
})
</script>
