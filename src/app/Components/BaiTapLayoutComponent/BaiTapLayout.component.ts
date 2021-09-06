import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout       ',
    template: `
        <div>
            Bài tập layout component
            <app-bt-header></app-bt-header>
            <div class="d-flex bg-primary"> 
                <div style="width: 30%">
                    <app-bt-sidebar></app-bt-sidebar>
                </div>
                <div style="width: 70%">
                    <app-bt-content></app-bt-content>
                </div>
            </div>
            <app-bt-footer></app-bt-footer>
        </div>
    `
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}