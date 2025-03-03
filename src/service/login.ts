import type { User } from "@/dao/user";
import { GetNetInstance } from "@/net/net_instance";

const loginUrl = "http://127.0.0.1:5001/login"

export async function Login(user: User) {
  const instance = GetNetInstance("fetch");

  if (!instance) {
    return false;
  }

  try {
    const response = await instance.Login(loginUrl, user);
    if (response?.status == 200) {
      let json = await response.json();
      if (json.status == "success") {
        console.log(json.message);
        return true;
      } else {
        console.log(json.message);
        return false;
      }
    }
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error!");
    }
  }
  return false;
}