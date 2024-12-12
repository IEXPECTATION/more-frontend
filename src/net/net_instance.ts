import { FetchInstance } from "./fetch/fetch";

export interface NetInterface {
  Login(url: string, user: any): Promise<boolean>;
}

export async function GetNetInstance(name: "fetch" | "axios") {
  switch (name) {
    case "fetch":
      return FetchInstance.Instance();
    case "axios":
      return undefined;
  }
}