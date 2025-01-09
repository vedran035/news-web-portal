import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm: any;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordComplexityValidator]],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm1: NgForm) {
    this.apiService.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },
        error => {
        });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }

  // Custom password validator to check complexity (lowercase, uppercase, number)
  passwordComplexityValidator(control: FormControl) {
    const password = control.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 characters, 1 number, 1 uppercase, 1 lowercase
    if (!regex.test(password)) {
      return { passwordComplexity: true };
    }
    return null;
  }
}
