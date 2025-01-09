import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginbtn: boolean = true;
  logoutbtn: boolean = false;

  constructor(private apiService: ApiService) {
    // Na početku će biti tretiran kao "nije prijavljen"
    this.loginbtn = true;
    this.logoutbtn = false;

    // Kada se prijavi korisnik, ažuriramo dugmadi
    this.apiService.getLoggedInName.subscribe(name => {
      if(name) {
        this.loginbtn = false;  // Sakrij dugme za prijavu
        this.logoutbtn = true;  // Prikazi dugme za odjavu
      } else {
        this.loginbtn = true;   // Prikazi dugme za prijavu
        this.logoutbtn = false; // Sakrij dugme za odjavu
      }
    });
  }

  logout() {
    this.apiService.deleteToken();  // Brišemo token prilikom odjave
    window.location.href = window.location.href;  // Osvježavamo stranicu da bi se stanje ažuriralo
  }

  handleLogout() {
    this.loginbtn = true;
    this.logoutbtn = false;
    console.log('Logout handled in AppComponent');
  }
}
