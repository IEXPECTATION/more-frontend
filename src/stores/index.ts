import { useConfigStore } from "./config/config";
import { useUserStore } from "./user/user";

export function initStore() {
  const userStore = useUserStore();
  const configStore = useConfigStore();
  
  userStore.InitUserSotre();
  configStore.InitConfigStore();
}

export { useUserStore } from "./user/user"