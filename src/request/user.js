import { ENV } from "../utils/constanst";

export class User {
  base_api = ENV.BASE_API;

  async signUp(data) {
    console.log(data);
    const url = `${this.base_api}/${ENV.API_ROUTES.REGISTER}`;
    console.log(url);

    const response =await fetch(url,{
      method: "POST",
      body: JSON.stringify(data),
      headers : {"content-type": "application/json"},
    })
    return response;
  }
  async signIn(data) {
    const url = `${this.base_api}/${ENV.API_ROUTES.LOGIN.replace(':id', data.email)}`;
    const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return response;
}

}


