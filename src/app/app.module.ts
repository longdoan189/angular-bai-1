import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapBonModule } from './BaiTapBon/BaiTapBon.module';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo.component';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';

@NgModule({
  declarations: [
    AppComponent, DemoComponent //nơi chứa component (mỗi component sinh ra phải có module chưa)
  ],
  imports: [
    BrowserModule, BaiTapLayoutModule, DataBindingModule, DirectiveModule, BaiTapBonModule //nơi import các module khác của ứng dụng
  ],
  providers: [], //nơi khai báo các service
  bootstrap: [AppComponent] // Nơi khai báo các Component chạy trên index <app-roort>
})
export class AppModule { }
