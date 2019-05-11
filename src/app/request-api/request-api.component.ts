import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
    selector: 'app-request-api',
    // providers: [],
    template: `
        <div class="container">
            <h2>List Products</h2>
            <ul>
                <li *ngFor="let p of products"> {{p.name}} - {{p.price | number}}</li>
            </ul>
            <h3>Add product</h3>
            <form [formGroup]="productForm"
            (ngSubmit)="addProduct()">
                Name: <input formControlName="name" placaholder="Enter name">
                <br><br>
                Price: <input formControlName="price" placaholder="Enter price">
                <br><br>
                <button class="btn btn-success">Add</button>
            </form>
        </div>
    `
})
export class RequestApiComponent implements OnInit {
    products: Product[];
    productForm: FormGroup;
    constructor(private http: HttpClient, private fb: FormBuilder, private productService: ProductService) {
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            price: ['0', Validators.required]
        });
    }
    ngOnInit() {
        // this.http.get('https://api.openweathermap.org/data/2.5/find?appid=01cc37655736835b0b75f2b395737694&q=Saigon')
        // .toPromise()
        // .then(result => console.log(result))
        // .catch(error => console.log(error));

        this.productService.getAllProducts()
        .then(listProduct => this.products = listProduct)
        .catch(err => console.error(err));
    }
    addProduct() {
        const { name, price } = this.productForm.value;
        this.productService.addProduct(name, price)
        .then(result => console.log(result))
        .catch(err => console.error(err.message));
    }
}
