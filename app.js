const routes = [
    {path: "/route1", component:route1},
    {path: "/route2", component:route2},
];

const router = new VueRouter({routes});

const app = new Vue({router}).$mount("#app");