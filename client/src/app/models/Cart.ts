export interface Cart {
  msg: string;
  _id:String;
  userId:string;
  date:any;
  isOpen:boolean;
  products:[];
  status: number;
  cart:Cart;
}
