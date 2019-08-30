export interface Cart {
  msg: string;
  _id:String;
  userId:string;
  date:any;
  isOpen:number;
  products:[];
  status: number;
  cart:Cart;
}
