import { BASE_URL } from '@/api'
import type { ICocktail, IGetCocktailsParams } from '@/api/interfaces/cocktails'
import type { AxiosResponse } from 'axios'

import urls from '@/api/urls'
const { cocktails } = urls

export async function getCocktails(
    params: IGetCocktailsParams,
) : Promise<AxiosResponse & { data: ICocktail[] }> { 
    return await BASE_URL.get(cocktails.list, { params })
}