import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-form',
    template: `
    <div style="margin:20px" >
        <button  *ngIf="!isShowForm" class="btn btn-primary" (click)="toogleForm()">+</button>
        <form *ngIf="isShowForm" 
        [formGroup]="productForm"
        (ngSubmit)="addProduct()"
        >
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" placeholder="Name" formControlName="name">
        </div>
        <div class="form-group">
            <label>Price</label>
            <input type="text" class="form-control" placeholder="Price" formControlName="price">
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-success" value="Add"
            [disabled]="productForm.invalid"
            >
            <input type="button" class="btn btn-danger" value="Cancel" style="margin-left:10px" 
            (click)="toogleForm()">
            </div>
        </form>
    </div>
    `,
    styleUrls: ['./product.component.css']
})
export class ProductFormComponent {

}