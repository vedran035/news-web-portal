import { Component } from '@angular/core';
import { FudbalList } from '../data/FudbalList';

@Component({
  selector: 'app-fudbal',
  templateUrl: './fudbal.component.html',
  styleUrls: ['./fudbal.component.css']
})
export class FudbalComponent {
fudbalList = FudbalList;
}
