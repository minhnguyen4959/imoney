<template>
  <div class="mt-6" v-if="user">{{ user.email }}</div>
</template>
<script>
import { useUser } from "@/composables/useUser";
export default {
  name: "HomeView",
  setup() {
    const { getUser } = useUser();
    const user = getUser();
    console.log(user);
    return { user };
  },
};
</script>
