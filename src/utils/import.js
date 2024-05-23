//khi nào cần đến thì mới hoạt động
import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth-component"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default-component"))
  );
}
