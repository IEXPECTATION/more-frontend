import type { NetInterface } from "../net_instance";

export class FetchInstance implements NetInterface {
  async Login(url: string, user: any): Promise<boolean> {
    let response = await fetch(url, {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    
    return true;
  }


  static Instance() {
    return FetchInstance.instance;
  }

  private static instance: FetchInstance = new FetchInstance();
}