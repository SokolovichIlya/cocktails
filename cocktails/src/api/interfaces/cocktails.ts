export interface ICocktailItem {
    strDrink: string
    strCategory: string
    strAlcoholic: string
    strGlass: string
    strDrinkThumb: string
    strInstructions: string
    [key: string]: string
}


export interface ICocktail {
    drinks: ICocktailItem[]
}

export interface IGetCocktailsParams {
    s: string
}