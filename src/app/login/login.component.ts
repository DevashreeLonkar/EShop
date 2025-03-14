import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm!: FormGroup;
hidePassword: any;

constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService,
  private snackBar: MatSnackBar,
  private router: Router
){}

ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })
}

togglePasswordVisibility(){
  this.hidePassword=  !this.hidePassword;
}

onSubmit() : void{
  const username= this.loginForm.get('email')!.value;
  const password= this.loginForm.get('password')!.value;
}
}

