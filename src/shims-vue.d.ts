// shims-vue.d.ts
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// shims-router.d.ts
declare module "./router" {
  import { Router } from "vue-router";
  const router: Router;
  export default router;
}
