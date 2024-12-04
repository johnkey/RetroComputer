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

  @Input()
  onSubmit!:Function;

  @Input()
  onRegister!:Function;

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

  submit():any {
    if (this.loginForm.valid) {
      return this.onSubmit();
    }
  }

  register():any {
    return this.onRegister();
  }

  

}
