export interface Order {
  userId: string;
  cartId: string;
  totalPrice: number;
  city: string;
  street: string;
  orderDate: Date;
  deliveryDate: Date;
  creditCard: number;
}

