import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container">
            <h3 class="display-4">Structural (directive angular cung cấp)</h3>
            <h3>*ngIf</h3>
            <nav class="nav text-white bg-dark justify-content-center">
              <a *ngIf="!isLogin else tempLogin" class="nav-link active text-white" href="#" (click)="login()">Login</a>
            </nav>
            <hr/>
            <div class="form-group">
                <p>Nhập số</p>
                <input class="form-control w-25" [(ngModel)] = "number"/>
            </div>
            <div class="alert alert-success">
                <p *ngIf="number%2==0">Số chẵn </p>
                <p *ngIf="number%2==1">Số lẻ </p>
                <p *ngIf="(number%2)%1 != 0">Không xét được </p>
            </div>

            <select [(ngModel)]="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
            </select>

            <div [ngSwitch]="color"> 
                <p style="color: red;" *ngSwitchCase="'red'">Red</p>
                <p style="color: green;" *ngSwitchCase="'green'">Green</p>
                <p style="color: blue;" *ngSwitchCase="'blue'">Blue</p>
                <p style="color: yellow;" *ngSwitchCase="'yellow'">Yellow</p>
                <p style="color: orange;" *ngSwitchCase="'orange'">Orange</p>
                <p style="color: purple;" *ngSwitchCase="'purple'">Purple</p>
            </div>

            <div class="row">
                <div class="col-4" *ngFor="let user of arrUser let index= index">
                    <div class="card">
                        <img [src]="user.avatar" alt="..." />
                        <div class="card-body">
                            <p>Index: {{index+1}} </p>
                            <p>userName: {{user.userName}} </p>
                            <p>Password: {{user.password}} </p>
                            <p>Email: {{user.email}} </p>
                        </div>
                    </div>
                </div>
            </div>

            <ng-template #tempLogin>
                <a *ngIf="isLogin" class="nav-link active text-white">Logged</a>
            </ng-template>
        </div>
    `
})

export class DirectiveComponent implements OnInit {
    arrUser:User[] = [
        {userName:'tom', password:'tom123', avatar: "https://picsum.photos/200/200", email:'tom@example.com'},
        {userName:'jerry', password:'jerry456', avatar: "https://picsum.photos/200/200", email:'jerry@example.com'},
        {userName:'spike', password:'spike789', avatar: "https://picsum.photos/200/200"},
    ]
    index:number = 0;
    isLogin: boolean = false;
    number:number= 0;
    color:string = "red";
    login() {
        this.isLogin = true;
    }

    constructor() { }
    ngOnInit() { }
}

interface User{
    userName: string
    password: string
    avatar: string
    email?: string
}