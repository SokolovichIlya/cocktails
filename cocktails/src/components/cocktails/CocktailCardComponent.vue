<template>
    <div class="cocktail-card">
        <div class="cocktail-card__data">
            <h3 class="cocktail-card__title">{{ cocktailItem.strDrink }}</h3>

            <div class="cocktail-card__group">
                <p class="cocktail-card__text">{{ cocktailItem.strCategory }}</p>
                <p class="cocktail-card__text">{{ cocktailItem.strAlcoholic }}</p>
                <p class="cocktail-card__text">{{ cocktailItem.strGlass }}</p>
            </div>

            <div class="cocktail-card__group">
                <p class="cocktail-card__subtitle">Instructions:</p>
                <p class="cocktail-card__text">{{ cocktailItem.strInstructions }}</p>
            </div>    
            
            <div class="cocktail-card__group">
                <p class="cocktail-card__subtitle">List of ingredients:</p>
                <template
                    v-for="item in 15" 
                    :key="`card-ingredient-${item}`"
                >
                    <div
                        v-if="cocktailItem[`strMeasure${item}`] || cocktailItem[`strIngredient${item}`]"
                        class="cocktail-card__ingredient"
                    >
                        <span class="cocktail-card__text">
                            {{ cocktailItem[`strMeasure${item}`] }} {{ cocktailItem[`strIngredient${item}`] }}
                        </span>
                    </div>
                </template>
            </div> 
        </div>
        <div class="cocktail-card__image">
            <img 
                v-lazy="cocktailItem.strDrinkThumb" 
                :alt="cocktailItem.strDrink"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import type { ICocktailItem } from '@/api/interfaces/cocktails'

defineProps({
    cocktailItem: {
        type: Object as PropType<ICocktailItem>,
        required: true,
    },
})
</script>