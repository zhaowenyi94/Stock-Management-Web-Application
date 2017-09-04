import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';

// 一个模块也是一个带装饰器的ts类
@NgModule({
  declarations: [// 该属性声明生命模块中有什么东西，只能声明组件，指令和管道
    AppComponent, HeaderComponent, MenuComponent, SidebarComponent, FooterComponent, ContentComponent, StockManageComponent, StarsComponent // 声明组件
  ],
  imports: [ // 该属性声明要让应用正常运转还需要什么什么
    BrowserModule
  ],
  providers: [], // 声明模块中提供了什么服务
  bootstrap: [AppComponent] // 声明了模块的主组件是什么
})
export class AppModule { }
