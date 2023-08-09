import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'
import Work from './pages/Work.vue'
import View from './pages/View.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const TestComp = { template: `<p>Test component here.</p>` };

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/work', name: 'work', component: Work },
  { path: '/view/:id', name: 'view', component: View },
  { path: '/about', name: 'about', component: TestComp },
  { path: '/contact', name: 'contact', component: TestComp },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  }
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');