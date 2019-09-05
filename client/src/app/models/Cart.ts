export interface Cart {
  msg: string;
  _id:string;
  userId:string;
  date:any;
  isOpen:number;
  products:[];
  status: number;
  cart:Cart;
}
