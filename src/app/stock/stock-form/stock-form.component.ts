import {Component, OnInit} from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;

  constructor() {
  }

  ngOnInit() {
    this.stock = new Stock(2, '#2 Stock', 2.99, 4.5, 'This is the second stock!', ['IT', 'WebTech']);
  }

}
