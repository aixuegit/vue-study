import Vue from 'vue'
import App from "./app"
import Router from 'vue-router'
import { constantRouterMap } from './router'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router);
Vue.use(ElementUI);
var router = new Router({ routes: constantRouterMap });
router.beforeEach((to, from, next) => {
	if (!to.matched.length) {
		next({ path: '/error' })
	} else {
		next();
	}
});

new Vue({
	el: "#app",
	router,
	beforeCreate() {
		console.log("beforeCreate");
	},
	created() {
		console.log("created");
	},
	beforeMount() {
		console.log("beforeMount");
	},
	mounted() {
		console.log("mounted");
	},
	render: h => h(App)
})
