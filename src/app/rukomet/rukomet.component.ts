import { Component } from '@angular/core';
import { RukometList } from '../data/RukometList';
@Component({
  selector: 'app-rukomet',
  templateUrl: './rukomet.component.html',
  styleUrls: ['./rukomet.component.css']
})
export class RukometComponent {
rukometList = RukometList;
}
