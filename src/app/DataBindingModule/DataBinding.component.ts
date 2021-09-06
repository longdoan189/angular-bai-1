import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
    <div class="container">
        <h1 class="display-4">Databinding</h1>
        <h3> Oneway binding </h3>
        <p class="text-danger">1. Interpolation (Binding dữ liệu từ models -> veiw thông qua thuộc tính với dấu 2 ngoặc nhọn</p>
        <p> Tiêu đề: {{title}} </p>
        <input value = "{{title}}" />
        <p class="text-danger">2. Property binding (dựa trên thuộc tính của thẻ thông qua ngoặc vuông) </p>
        <div [innerHTML]="title"></div>
        <input [value]="title" />
        <p>3. Event binding (thay đổi dữ liệu trên giao diện thông qua xử lý)</p>
        <div class="form-group">
            <p> Tiêu đề </p>
            <input class="form-control w-25" #tagInput/> template variable <br/>
            <button class="btn btn-success" (click)="changeTitle(tagInput.value)">Change title </button>
        </div>
        <h3>Two way binding (binding dữ liệu 2 chiều tự động)</h3>
        <input class="form-control" [(ngModel)]="title"/>
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let product of arrProduct">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td><img [src]="product.img" width="50" height="50" alt="..."/></td>
                        <td>{{product.price}}</td>
                        <td><input class="form-control" [(ngModel)]="product.quantity"/></td>
                        <td>{{product.quantity * product.price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
})

export class DataBindingComponent implements OnInit {
    //dữ liệu muốn hiển thị lên giao diện thì phải là thuộc tính của component
    title:string = 'abc';
    arrProduct: Product[] = [
        {id:'1', name:'IphoneX', price:100, img:'https://picsum.photos/id/1/200/200', quantity: 1},
        {id:'2', name:'Samsung S21', price:200, img:'https://picsum.photos/id/1/200/200', quantity: 1},
        {id:'3', name:'Nokia', price:300, img:'https://picsum.photos/id/1/200/200', quantity: 1},
    ]
    constructor() { }

    changeTitle(newTitle:string) {
        this.title = newTitle;
    }

    ngOnInit() { }
}

interface Product {
    id: string,
    name: string,
    price: number,
    img: string,
    quantity: number,
}