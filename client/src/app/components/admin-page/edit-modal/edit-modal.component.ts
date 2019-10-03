import {Component, Inject, inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder,FormGroup } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  editProductForm:FormGroup;
  adminToken:String;

  constructor(
    private productService:ProductService,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  this.authService.loadToken();
  this.adminToken = this.authService.currentUserToken;
  this.editProductForm = this.formBuilder.group({
    name:'',
    categoryId:'',
    price:'',
    imageURL:''
  })
    const editForm = this.editProductForm.controls;
    const preEditFields = this.data.preEditFields;

    editForm.categoryId.setValue(preEditFields.categoryId);
    editForm.name.setValue(preEditFields.name);
    editForm.price.setValue(preEditFields.price);
    editForm.imageURL.setValue(preEditFields.imageURL);
  }

  save(productID){
    const newFormValues = this.editProductForm.getRawValue();

    const editedProduct = {
      name:newFormValues.name.toLowerCase(),
      categoryId:newFormValues.categoryId,
      price:newFormValues.price,
      imageURL: newFormValues.imageURL
    };

      this.productService.editProduct(productID, editedProduct, this.adminToken).subscribe(data => {
        this.dialogRef.close(data);
      })
  }

  capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  allowNumberOnly(e){
    const code = (e.which) ? e.which : e.keycode;
    if (code > 31 && (code < 48 || code > 57)){
      e.preventDefault()
    }
  }

}
