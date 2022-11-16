import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

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
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
	]
})

export default router
