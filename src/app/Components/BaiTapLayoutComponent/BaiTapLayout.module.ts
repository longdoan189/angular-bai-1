import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTContentComponent } from './BTContent.component';
import { BTFooterComponent } from './BTFooter.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BTSidebarComponent } from './BTSidebar.component';

@NgModule({
    declarations: [BTHeaderComponent,BaiTapLayoutComponent, 
        BTSidebarComponent, BTContentComponent, BTFooterComponent], //chứa component trực thuộc
    imports: [CommonModule], //nơi import các module khác
    exports: [BaiTapLayoutComponent], //kết quả cần xuất ra của module để module khác import vào có thể sử dụng
})
export class BaiTapLayoutModule { }
