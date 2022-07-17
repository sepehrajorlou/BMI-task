import Vue from 'vue'
import router from 'vue-router'
const MainComponent = () => import('@/components/MainComponent.vue');
const MainPage = () => import('@/views/Main.vue');
Vue.use(router);
const routes = [
	{
		path: "/",
		component: MainComponent,
		redirect: "/main",
		children: [
			{
				path: "/main",
				component: MainPage
			}
		]
	}
]
const VueRouter = new router({
	mode: "history",
	routes
})
export default VueRouter;