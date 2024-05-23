<template lang="">
  <!-- start info -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://ae01.alicdn.com/kf/S3cf59f2c311a48658efdd61bd4f02dfbV.jpg_480x480.jpg_.webp"
            size="xs"
            alt="User's profile avatar"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="text-bold text-2xl text-primary mt-3">{{ user.displayName }}</div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>    
    </div>
  </div>
  <!-- start menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="profileOption in profileOptions" :key="profileOption.name">
              <router-link
                :to="profileOption.route.name"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico t2ico-wallet text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{profileOption.name}}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useUser } from "@/composables/useUser";
import { PROFILE_OPTIONS } from "@/constants";
export default {
  setup() {
    const { getUser } = useUser();
    const user = getUser();
    const profileOptions = reactive(PROFILE_OPTIONS);

    return {profileOptions, user}
  },
};
</script>
