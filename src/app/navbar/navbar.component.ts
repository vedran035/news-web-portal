import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() loginbtn: boolean = true;
  @Input() logoutbtn: boolean = false;

  @Output() onLogout = new EventEmitter<void>();

  logout() {
    console.log('User logged out');
    this.onLogout.emit(); // Emituje događaj roditeljskoj komponenti
  }
}
