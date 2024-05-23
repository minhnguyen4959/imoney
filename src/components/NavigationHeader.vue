<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-10 h-10 overflow-hidden rounded-full" v-if="meta.leading">
            <img
              class="w-full h-auto object-cover"
              src="https://th.bing.com/th?id=OIP.OQKNOw9i2dAVhEehmky60wHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              size="sm"
              alt="user's profile avatar"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">{{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute();
    return {
      meta: computed(() => router.meta),
    };
  },
};
</script>
