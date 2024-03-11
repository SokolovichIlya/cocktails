<template>
    <aside :class="{'open': isOpenSidebar}" class="sidebar">
        <nav class="sidebar__nav">
            <ul class="sidebar__links">
                <li 
                >
                    <router-link 
                        v-slot="{ href, navigate, isActive }"
                        v-for="cocktail in cocktailConfig" 
                        :key="`cocktail-${cocktail.code}`"
                        :to="{
                            name: 'cocktail.item', 
                            params: { cocktailCode: cocktail.code },
                        }" 
                        custom
                    >
                        <li 
                            @click="navigate" 
                            :active="isActive" 
                            :href="href"
                            :class="{'active': isActive}"
                            class="sidebar__links-item"
                        >
                            {{ cocktail.code }}
                        </li>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import cocktailConfig from '@/configs/cocktails'
import { defineProps } from 'vue'

defineProps({
    isOpenSidebar: {
        type: Boolean,
        default: false,
    },
})
</script>