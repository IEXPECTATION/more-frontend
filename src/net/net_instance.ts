import type { User } from "@/dao/user";
import { FetchInstance } from "./fetch/fetch";
import { AxiosInstance } from "./axios/axios";

export interface NetInterface {
  Login(url: string, user: User): Promise<Response>;
  Signup(url: string, user: User): Promise<Response>;

  GetAllCardsData(url: string): Promise<void>;
  SetAllCardsData(url: string): Promise<void>;
  GetTargetCardData(url: string, name: string): Promise<void>;
  SetTargetCardData(url: string, name: string, amount: number): Promise<void>;
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