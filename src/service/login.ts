import type { User } from "@/dao/user";
import { GetNetInstance } from "@/net/net_instance";

const LoginUrl = "http://localhost:5001/login"

export async function Login(user: User) {
  const instance = GetNetInstance("fetch");

  try {
    const response = await instance?.Login(LoginUrl, user);
    if (response?.status == 200) {
      console.log("Login successfully!");
      return true
    }
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown type");
    }
  }
  return false;
}