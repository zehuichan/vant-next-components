import { createRouter, createWebHashHistory } from 'vue-router'
import config from '@/config.js'

const loadView = function () {
	return treeToList(config.nav, 'items').map(item => ({
		path: '/' + item.path,
		component: () => import(`@/views/${item.path}`),
		name: item.path,
		meta: {
			title: item.title
		}
	}))
}

const treeToList = function (data, children = 'children') {
	let tmp = []
	data.forEach(item => {
		tmp.push(item)
		if (item[children] && item[children].length > 0) {
			const res = treeToList(item[children], children)
			tmp = tmp.concat(res)
		} else {
			// 删掉不存在 children 值的属性
			delete item[children]
		}
	})
	return tmp
}

/* Layout */
import Layout from '@/layout/index.jsx'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
	{ path: '/', redirect: '/home' },
	{
		path: '',
		component: Layout,
		children: loadView()
	}
]

// init router
export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
	strict: true,
	// scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
export function setupRouter(app) {
	app.use(router)
}
