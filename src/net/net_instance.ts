import type { User } from "@/dao/user";
import { FetchInstance } from "./fetch/fetch";

export interface NetInterface {
  Login(url: string, user: User): Promise<boolean>;
  Signup(url: string, user: User): Promise<boolean>;
}

export async function GetNetInstance(name: "fetch" | "axios"): Promise<NetInterface | undefined> {
  switch (name) {
    case "fetch":
      return FetchInstance.Instance();
    case "axios":
      return undefined;
  }
}