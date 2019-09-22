import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ProductService} from "../../services/product.service";
import { CategoryService} from "../../services/category.service";
import { FormGroup, FormBuilder,Validators} from "@angular/forms";
import { Product} from "../../models/Product";
import { Category} from "../../models/Category";
import {MatDialog} from "@angular/material/dialog";
import { EditModalComponent } from "./edit-modal/edit-modal.component";
import {AddModalComponent} from "./add-modal/add-modal.component";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {

  isLoading: Boolean = true;
  adminToken: String;

  addProductForm: FormGroup;
  products: Product[];
  categories: Record<string, Category>;
  productsLength: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private productsService: ProductService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.authService.loadToken();
    this.adminToken = this.authService.currentUserToken;
    this.getAllProducts();
    this.getAllCategories();

    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required]
    })
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
      this.productsLength = this.products.length;
    })
  }

  getAllCategories() {
    this.categoryService.geAllCategories().subscribe(data => {
      this.convertArrToObject(data);
    })
  }

  convertArrToObject(productsArray){
    const productsObj = {};
    for (let i=0; i<productsArray.length;i++){
      productsObj[productsArray[i]._id] = productsArray[i];
    }
    this.categories = productsObj;
    this.isLoading = false
  }

  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  openeEditDialog(productsValues,categoriesObject):void {
    const dialogRef = this.dialog.open(EditModalComponent,{
      data:{
        preEditFields:productsValues,
        categories:categoriesObject
      }
    });
  dialogRef.afterClosed().subscribe(()=>{
    this.getAllProducts()
  })

  }

  openAddDialog(categoriesObject):void {
    const dialogRef = this.dialog.open(AddModalComponent,{
      data:{
        categories:categoriesObject
      }
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.getAllProducts()
    })

  }





}

