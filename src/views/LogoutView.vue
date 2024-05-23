<template lang="">
  <div>logout</div>
</template>
<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();
    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "login", params: {} });
    }
    onLogout();
    return {}
  },
};
</script>
