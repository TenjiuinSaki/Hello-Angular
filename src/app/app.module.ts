import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 模块
@NgModule({
  declarations: [   // 声明组件、指令、管道
    AppComponent
  ],
  imports: [        // 依赖的其他模块
    BrowserModule   // 浏览器模块（必需）
  ],
  providers: [],    // 模块提供的服务
  bootstrap: [AppComponent] // 主组件
})
export class AppModule { }
