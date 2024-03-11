import { defineStore } from 'pinia'

import type { TypeCocktailsStoreState } from './types/cocktails'
import { getCocktails } from '@/api/requests/cocktails'

export const useCocktailsStore = defineStore('cocktails', {
    state: () => ({
        isLoadingCocktail: false,
        cocktailsList: {},
    }) as TypeCocktailsStoreState,

    getters: {
        hasCocktail: ({ cocktailsList }) => {
            return (code: string) => !!cocktailsList[code]
        },

        getCocktail: ({ cocktailsList }) => {
            return (code: string) => cocktailsList[code]
        },
    },

    actions: {
        async fetchCocktails(code: string) : Promise<void> {
            try {
                this.isLoadingCocktail = true

                if (!this.cocktailsList[code]) {
                    const cocktails = await getCocktails({ s: code })
                    
                    this.cocktailsList[code] = cocktails.data
                }
            } catch (error) {
                console.error(error)	
            } finally {
                this.isLoadingCocktail = false
            }
        },
    },
})
