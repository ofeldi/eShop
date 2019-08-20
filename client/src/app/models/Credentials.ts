import { User } from './user'
export interface Credentials{
  //Register credentials
  identityNumber:number;
  email:string;
  password:string;
  password2:string
  userChecked:boolean;

  //login credentials
  success:boolean;
  token:String;
  user:User
}
