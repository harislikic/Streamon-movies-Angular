import { AutentifikacijaHelper } from "./login-info/authentification-help";
import { AutentifikacijaToken } from "./login-info/logInfo";


export class MojConfig{
  static adresa_servera :"https://localhost:44300";

  static http_opcije=function () {

    let autentifikacijaToken:AutentifikacijaToken = AutentifikacijaHelper.getLoginInfo().autentifikacijaToken;
    let mojtoken = "";

    if(autentifikacijaToken!=null)
      mojtoken=autentifikacijaToken.value;
    return{
      Headers:{
        'autentifikacija-token':mojtoken,
      }
    };
  }

}
