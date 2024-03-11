<template>
    <header class="header">
        <div class="wrapper-content header__wrapper">
            <div 
                @click="$emit('change')"
                :class="{'active': isOpenSidebar}" 
                class="burger"
            >
                <span />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    isOpenSidebar: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['change'])
</script>