import { createRouter, createWebHistory } from 'vue-router'
import cocktailConfig from '@/configs/cocktails'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue'),
		},
		{
			path: '/cocktail/:cocktailCode',
			name: 'cocktail.item',
			component: () => import('@/views/CocktailView.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404',
            component: () => import('@/views/errors/NotFoundView.vue'),
		},
	],
})

router.beforeEach((to, from, next) => {
	if (to.name === 'cocktail.item') {
		const hasCocktail = cocktailConfig.findIndex(cocktail => 
			cocktail.code === to.params.cocktailCode
		) 

		if (hasCocktail >= 0) {
			next()
		} else {
			next({ name: '404' })
		}
	}

	next()
})

export default router
