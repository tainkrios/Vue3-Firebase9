import { ComponentOptionsBase, ComponentPublicInstance, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from '@/firebase/config'
import { onAuthStateChanged } from '@firebase/auth'

let app: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})
