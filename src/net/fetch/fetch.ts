import type { NetInterface } from "../net_instance";

export class FetchInstance implements NetInterface {
  async Login(url: string, user: any): Promise<boolean> {
    const abortController = new AbortController();

    const timeout = new Promise((_, reject: (reason?: any) => void) => {
      setTimeout(() => {
        reject(new Error("Request timed out"));
      }, 3000);
    })

    const request = fetch(url, {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      signal: abortController.signal
    }).then((response: Response) => {
      
    });

    return await Promise.race([request, timeout])
      .then(() => {
        return true;
      })
      .catch((error: Error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted due to timeout');
        } else {
          console.error('Fetch error:', error.message);
        }

        abortController.abort();
        return false;
      })
  }


  static Instance() {
    return FetchInstance.instance;
  }

  private static instance: FetchInstance = new FetchInstance();
}