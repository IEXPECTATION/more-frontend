import type { User } from "@/dao/user";
import { GetNetInstance } from "@/net/net_instance";

export function Login(url: string, user: User) {
  const instance = GetNetInstance("fetch");
  instance?.Login(url, user);
}