import type { User } from "@/dao/user";
import type { NetInterface } from "../net_instance";
import { useUserStore } from "@/stores";

export class FetchInstance implements NetInterface {
  static Instance() {
    return FetchInstance.instance;
  }

  async Login(url: string, user: User): Promise<Response> {
    return this.post(url, { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
  }

  async Signup(url: string, user: User): Promise<Response> {
    return this.post(url, { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
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

  private static instance: FetchInstance = new FetchInstance();
  private async post(url: string, options: RequestInit = {}, timeout: number = 3000) {
    const abortController = new AbortController();

    const timeoutId = setTimeout(() => {
      abortController.abort();
    }, timeout);

    return fetch(url, {
      method: "Post",
      ...options,
      signal: abortController.signal
    }).then((response: Response) => {
      return response;
    }).catch((error: Error) => {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        throw new Error("Timeout");
      } else {
        throw error;
      }
    })
  }
}