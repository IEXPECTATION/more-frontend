import type { User } from "@/dao/user";
import type { NetInterface } from "../net_instance";

export class AxiosInstance implements NetInterface {
  static Instance() {
    return AxiosInstance.instance;
  }

  Login(url: string, user: User): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  Signup(url: string, user: User): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  GetAllCardsData(url: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  SetAllCardsData(url: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  GetTargetCardData(url: string, name: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  SetTargetCardData(url: string, name: string, amount: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private static instance: AxiosInstance = new AxiosInstance();
}