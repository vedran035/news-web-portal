import { Component } from '@angular/core';
import { ProductList } from '../data/ProductsList';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
productList = ProductList;

}
