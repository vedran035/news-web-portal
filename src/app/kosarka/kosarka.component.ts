import { Component } from '@angular/core';
import { KosarkaList } from '../data/KosarkaList';
@Component({
  selector: 'app-kosarka',
  templateUrl: './kosarka.component.html',
  styleUrls: ['./kosarka.component.css']
})
export class KosarkaComponent {
kosarkaList = KosarkaList;
}
