import type { NetInterface } from "../net_instance";

export class FetchInstance implements NetInterface {
  async Login(url: string, user: any): Promise<boolean> {
    const abortController = new AbortController();

    const cancelCallback = setTimeout(() => {
      abortController.abort();
    }, 3000);

    const response = await fetch(url, {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      signal: abortController.signal
    }).then((response: Response) => {
      clearTimeout(cancelCallback);
      return response;
    }).catch((error: Error) => {
      clearTimeout(cancelCallback);
      console.log("Error:", error);
      return null;
    })

    console.log(response)

    if (response) {
      return true;
    }

    return false;
  }


  static Instance() {
    return FetchInstance.instance;
  }

  private static instance: FetchInstance = new FetchInstance();
}