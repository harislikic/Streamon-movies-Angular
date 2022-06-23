
export class LoginInformacije {
  autentifikacijaToken:   AutentifikacijaToken = null as any;
  isLogiran:                   boolean=false;
}

export interface AutentifikacijaToken {
  id:           number;
  value:        string;
  accountId:    number;
  account:      Account;
}

export interface Account {
  id:                 number;
  Username:      string;
}

