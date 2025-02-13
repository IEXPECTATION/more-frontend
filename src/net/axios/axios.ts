import type { User } from "@/dao/user";
import type { NetInterface } from "../net_instance";

export class AxiosInstance implements NetInterface {
  Login(url: string, user: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  Signup(url: string, user: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  static Instance() {
    return AxiosInstance.instance;
  }

  private static instance: AxiosInstance = new AxiosInstance();
}