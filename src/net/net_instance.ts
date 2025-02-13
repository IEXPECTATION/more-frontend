import type { User } from "@/dao/user";
import { FetchInstance } from "./fetch/fetch";
import { AxiosInstance } from "./axios/axios";



export interface NetInterface {
  Login(url: string, user: User): Promise<boolean>;
  Signup(url: string, user: User): Promise<boolean>;
}

export function GetNetInstance(name: "fetch" | "axios"): NetInterface | null {
  switch (name) {
    case "fetch":
      return FetchInstance.Instance();
    case "axios":
      return AxiosInstance.Instance();
    default:
      return null;
  }
}