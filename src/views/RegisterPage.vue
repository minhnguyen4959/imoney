<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form action="" @submit.prevent="onSubmit">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input
              type="text"
              id="fullName"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-4 border-indigo-200 border-l-indigo-500"
              placeholder="full name ..."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email</span>
            <input
              type="email"
              id="email"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-4 border-indigo-200 border-l-indigo-500"
              placeholder="full name ..."
              v-model="email"
            />
          </label>
        </div>

        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              type="password"
              id="password"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-4 border-indigo-200 border-l-indigo-500"
              placeholder="full name ..."
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="mt-5 text-center py-3 w-full bg-primary rounded-full"
          >
            Signup
          </button>
        </div>
      </form>

      <!-- end form -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="font-semibold">
          <router-link :to="{ name: 'login', params: {} }">Sign in</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import { useRouter } from "vue-router";
export default {
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const { error, signUp, isPending } = useSignUp();
    const  router  = useRouter();
    const onSubmit =async () => {
      await signUp(email.value, password.value, fullName.value)
      if (!error.value) {
        router.push({name: 'login', params:{}})
      }
    };
    return {
      onSubmit,
      fullName,
      email,
      password,
    };
  },
};
</script>
