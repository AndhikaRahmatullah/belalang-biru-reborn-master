import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Sigin from '../views/AuthSigin.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'firstPage',
			component: FirstPage
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/sigin',
			name: 'sigin',
			component: Sigin
		},
	]
})

export default router
