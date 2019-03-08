import { enableProdMode } from '@angular/core';     // 用来关闭开发者模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';   // 使用哪个模块启动应用

import { AppModule } from './app/app.module';       // 导入应用主模块
import { environment } from './environments/environment';   // 导入环境配置

// 生产环境关闭开发者模式
if (environment.production) {
  enableProdMode();
}
// 使用主模块启动应用
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
