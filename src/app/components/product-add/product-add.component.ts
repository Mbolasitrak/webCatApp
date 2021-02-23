import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?:FormGroup;//|null=null;
  constructor(private fb:FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:[{value:""},Validators.required],
      price:[{value:0},Validators.required],
      quantity:[{value:0},Validators.required],
      selected:[{value:true},Validators.required],
      available:[{value:true},Validators.required]
    });
  }

  onSaveProduct() {
    this.productsService.save(this.productFormGroup?.value)
  }
}
