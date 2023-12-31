import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import Store from './store.js';

const store = createStore(Store);

const app = createApp(App);
app.use(store);
app.mount('#catalogDetail');
