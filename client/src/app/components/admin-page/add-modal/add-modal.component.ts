import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder,FormGroup } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  addProductForm:FormGroup;
  adminToken:String;

  constructor(
    private productService:ProductService,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<AddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.authService.loadToken();
    this.adminToken = this.authService.currentUserToken;

    this.addProductForm = this.formBuilder.group({
      name:'',
      categoryId:'',
      price:'',
      imageURL:''
    })
  }

  save(){
    const formValues = this.addProductForm.getRawValue();

    const newProduct = {
      name:formValues.name.toLowerCase(),
      categoryId:formValues.categoryId,
      price:formValues.price,
      imageURL: formValues.imageURL
    };
console.log(newProduct);
    this.productService.createNewProduct(newProduct,this.adminToken).subscribe(data=>{
      this.dialogRef.close(data);
    })

  }
  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  allowNumberOnly(e) {
    const code = (e.which) ? e.which : e.keycode;
    if ( code == 45) {
     // if (code > 31 && (code < 48 || code > 57))
      {
        console.log("Oren");
        e.preventDefault()
      }
    }
  }


}

