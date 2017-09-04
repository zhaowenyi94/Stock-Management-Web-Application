import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {

    this.stocks = [
      new Stock(1, '#1 Stock', 1.99, 3.5, 'This is the first stock!', ['IT', 'WebTech']),
      new Stock(2, '#2 Stock', 2.99, 4.5, 'This is the second stock!', ['IT', 'WebTech']),
      new Stock(3, '#3 Stock', 3.99, 3.2, 'This is the third stock!', ['Car', 'WebTech']),
      new Stock(4, '#4 Stock', 1.99, 3.4, 'This is the fourth stock!', ['Account', 'WebTech']),
      new Stock(5, '#5 Stock', 0.99, 3.6, 'This is the fifth stock!', ['Edu']),
      new Stock(6, '#6 Stock', 14.99, 2.5, 'This is the sixth stock!', ['IT']),
      new Stock(7, '#7 Stock', 10.99, 4.6, 'This is the eighth stock!', ['Health']),
      new Stock(8, '#8 Stock', 8.99, 4.2, 'This is the ninth stock!', ['Grocery']),
      new Stock(9, '#9 Stock', 7.99, 4.1, 'This is the tenth stock!', ['Grocery', 'WebTech']),
      new Stock(10, '#10 Stock', 10.59, 4.9, 'This is the eleventh stock!', ['Commercial'])
    ];

  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
