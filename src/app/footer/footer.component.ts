import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 @Input() loginbtn: boolean = true;
  @Input() logoutbtn: boolean = false;

  @Output() onLogout = new EventEmitter<void>();

  logout() {
    console.log('User logged out');
    this.onLogout.emit(); // Emituje događaj roditeljskoj komponenti
  }
}
