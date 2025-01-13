import type { User } from "@/dao/user";
import type { NetInterface } from "../net_instance";

export class FetchInstance implements NetInterface {
  async post(url: string, options: RequestInit = {}, timeout: number = 3000) {
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

  async Login(url: string, user: User): Promise<boolean> {
    return this.post(url, { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
      .then((response: Response) => {
        return true;
      })
      .catch((error: Error) => {
        return false;
      });
  }

  async Signup(url: string, user: User) {
    return this.post(url, { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) }, 20000)
      .then((response: Response) => {
        return true;
      })
      .catch((error: Error) => {
        return false;
      });
  }


  static Instance() {
    return FetchInstance.instance;
  }

  private static instance: FetchInstance = new FetchInstance();
}