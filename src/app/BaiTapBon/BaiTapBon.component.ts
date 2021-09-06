import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitapbon',
    template: `
    <div class="container">
        <h1>Register form </h1>
        <p> <b> Email: </b> </p>
        <input value={{email}} #tagInput placeholder="Enter full name"/>
        <p> <b> FullName: </b> </p>
        <input [(ngModel)] = "fullName" placeholder="Enter valid email">
        <p></p>
        <button class="btn btn-submit bg-success" (click)="changeEmail(tagInput.value)">Submit</button>
        <p></p>
        <div>
            <span><b>Email: </b> {{email}}</span>
        </div>
        <div>
            <span><b>FullName: </b> {{fullName}} </span>
        </div>
    </div>
    `
})

export class BaiTapBonComponent implements OnInit {
    constructor() { }
    email: string = ""
    fullName: string = ""
    changeEmail(newEmail: string) {
        this.email = newEmail
    }
    ngOnInit() { }
}