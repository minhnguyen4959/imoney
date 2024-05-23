<template>
  <!-- tạo ra component bao bọc router, :is là layout -->
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "./constants";

export default {
  setup() {
    
    const route = useRoute();
    console.log(route);
    return {
      //trả về layout mỗi nghĩ route thay đổi
      layout: computed(() => {
        return (route.meta.layout || "default");
      }),
    };
  },
};
</script>
