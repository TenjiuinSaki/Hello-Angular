import { Component } from '@angular/core';
// 装饰器
@Component({
  selector: 'app-root',                 // 组件名
  templateUrl: './app.component.html',  // 模板（必需）
  styleUrls: ['./app.component.css']    // 组件专用样式
})
export class AppComponent {             // 控制器
  title = 'Hello-Angular';
}
