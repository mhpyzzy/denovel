import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			children: [
				{
					path: '',
					name: 'message',
					alias: ['message'],
					// route level code-splitting
					// this generates a separate chunk (about.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					component: () => import(/* webpackChunkName: "message" */ '../views/message/index.vue'),
				},
				{
					path: 'create',
					name: 'create',
					component: () => import(/* webpackChunkName: "create" */ '../views/create/index.vue'),
				},
				{
					path: 'center',
					name: 'center',
					component: () => import(/* webpackChunkName: "center" */ '../views/center/index.vue'),
				},
			],
		},
		{
			path: '/m1',
			name: 'm1',
			component: () => import(/* webpackChunkName: "m1" */ '../views/message/m1.vue'),
		},
		{
			path: '/m2',
			name: 'm2',
			component: () => import(/* webpackChunkName: "m2" */ '../views/message/m2.vue'),
		},
		// 上传章节
		{
			path: '/upload',
			name: 'upload',
			component: () => import(/* webpackChunkName: "upload" */ '../views/create/upload.vue'),
		},
		// 活动列表页面
		{
			path: '/activity',
			name: 'activity',
			component: () => import(/* webpackChunkName: "activity" */ '../views/create/activity.vue'),
		},

		// 藏品主页面 所有藏品的集合
		{
			path: '/collection',
			name: 'collection',
			component: () => import(/* webpackChunkName: "collection" */ '../views/create/collection/index.vue'),
		},
		// 藏品列表页面 单个的藏品
		{
			path: '/collection_list',
			name: 'collection_list',
			component: () => import(/* webpackChunkName: "collection" */ '../views/create/collection/collection_list.vue'),
		},
		// 铸造藏品页面
		{
			path: '/cast',
			name: 'cast',
			component: () => import(/* webpackChunkName: "cast" */ '../views/create/collection/cast.vue'),
		},
		// 创建藏品
		{
			path: '/collecting',
			name: 'collecting',
			component: () => import(/* webpackChunkName: "collecting" */ '../views/create/collection/collecting.vue'),
		},

		// 创建藏品
		{
			path: '/copyright',
			name: 'copyright',
			component: () => import(/* webpackChunkName: "copyright" */ '../views/create/copyright/index.vue'),
		},
		// 创建藏品
		{
			path: '/copyrighting',
			name: 'copyrighting',
			component: () => import(/* webpackChunkName: "copyrighting" */ '../views/create/copyright/copyrighting.vue'),
		},
	],
});

export default router;
