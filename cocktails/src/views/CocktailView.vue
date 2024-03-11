<template>
    <main v-if="!isLoadingCocktail && hasCocktail(cocktailCode)">
        <div class="cocktails">
            <CocktailCardComponent 
                v-for="(cocktailItem, index) in currentCocktail.drinks" 
                :key="`${cocktailCode}-cocktail-item-${index}`"
                :cocktail-item="cocktailItem" 
            />
        </div>
    </main>
</template>

<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import CocktailCardComponent from '@/components/cocktails/CocktailCardComponent.vue'

const { 
    isLoadingCocktail, 
    hasCocktail,
    getCocktail,
} = storeToRefs(useCocktailsStore())

const { fetchCocktails } = useCocktailsStore()
const route = useRoute()

const cocktailCode = computed<string>(() => route.params.cocktailCode as string)

fetchCocktails(cocktailCode.value)

const currentCocktail = computed(() => getCocktail.value(cocktailCode.value))

watch(() => cocktailCode.value, (newCode: string) => {
    fetchCocktails(newCode)
})
</script>