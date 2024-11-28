import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  @Input()
  mode!:string;

  isRetro:boolean=false;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  
  ngOnInit(): void {
    if(this.mode.includes('retro')){
      this.isRetro= true;
    }else{
      this.isRetro= false;
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful', this.loginForm.value);
    }
  }

  onRegister() {
    console.log('Redirect to registration');
  }

  

}
