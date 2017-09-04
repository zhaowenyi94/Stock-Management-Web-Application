import { Component } from '@angular/core'; // import a decorator named "Component" from the core module of angular

@Component({// Using this decorator to define a component and the meta data of componet
  selector: 'app-root', // 规定该组件可以通过app-root标签调用，规定了该组件的选择器
  templateUrl: './app.component.html', // 定义组件内容模板
  styleUrls: ['./app.component.css'] // 定义模板中用到的样式
})
// A tipycal typescript class, controller
export class AppComponent {
  title = '赵闻一的主页'; // 属性的值会被展示到浏览器页面中
}
