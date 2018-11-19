import Layout from "@/layout/layout"
import Home from "@/home/home"

export const constantRouterMap = [
	{
		path: '',
		component: Layout,
		redirect: '/home/home'
	},
	{
		path: "/home",
		component: Layout,
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import("@/home/home"),
				meta: { title: 'home', icon: 'home' }
			}
		]
	},
	{
		path: "/success",
		component: () => import("@/success/success"),
	},
	{
		path: "/error",
		component: () => import("@/errorPages/404")
	}
];

export const asyncRouterMap = []

