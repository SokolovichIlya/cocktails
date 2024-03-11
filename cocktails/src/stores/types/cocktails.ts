import type { ICocktail } from '@/api/interfaces/cocktails'

export type TypeCocktailsStoreState = {
    isLoadingCocktail: boolean
    cocktailsList: {
        [key: string]: ICocktail,
    },
}
