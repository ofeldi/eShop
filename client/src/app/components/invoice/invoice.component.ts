import {Component, OnDestroy, OnInit} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {AuthService} from "../../services/auth.service";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";
import {OrderService} from "../../services/order.service";


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  totalCartProductsQuantity: Number;
  currentCartProducts: Product[];
  productsForCart: Record<string, Product>;
  totalPrice: Number;
  oderDate:String=localStorage.getItem('order_date');
  deliveryDate:String=localStorage.getItem('delivery_date');

  constructor(private authService: AuthService,
              private productService: ProductService,
              private orderService:OrderService
  ) {}

  ngOnInit() {
    this.authService.loadUserCart();
    this.getAllProducts();

    this.currentCartProducts =  (JSON.parse(localStorage.getItem('clone_cart'))).products     //this.authService.userCart.products;
    this.totalPrice = (JSON.parse(localStorage.getItem('clone_cart'))).totalCartPrice// this.authService.userCart.totalCartPrice;

    this.setTotalCartProductsQuantity();

    console.log(JSON.parse(localStorage.getItem('clone_cart')))
  }

  ngOnDestroy(){

  }


  public captureScreen() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.convertArrToObject(data);
      this.isLoading = false
    });
  }

  convertArrToObject(productsArray) {
    const productsObj = {};
    for (let i = 0; i < productsArray.length; i++) {
      productsObj[productsArray[i]._id] = productsArray[i]
    }
    this.productsForCart = productsObj;
  }


  setTotalCartProductsQuantity(){
    const cartProductsQuantityArr = this.currentCartProducts.map(obj=> obj.quantity);
    this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0)
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
