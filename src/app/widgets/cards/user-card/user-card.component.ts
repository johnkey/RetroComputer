import { Component, Input, OnChanges, OnInit ,SimpleChanges,inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Person{
  nick: string;
  email:  string;
  firstName: string;
  lastName?: string;
  address?: string;
  state?:string;
  city?: string;
  postalCode?: string;
}
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit{
 

  isEditable:boolean=false;

  private fb = inject(FormBuilder);
  
  @Input()
  mode!: string;

  @Input()
  user!: Person;


  //super retro form
  userForm!:FormGroup;
  
  ngOnInit(): void {

    this.userForm = this.fb.group({
      email:  [{value: this.user.email, disabled: true}],
      firstName: [{value: this.user.firstName, disabled: true}],
      lastName: [{value: this.user.lastName, disabled: true}],
      address: [{value: this.user.address, disabled: true}],
      state: [{value: this.user.state, disabled: true}],
      city: [{value: this.user.city, disabled: true}],
      postalCode: [{value: this.user.postalCode, disabled: true}]
    });
    
  }


  edit() {

    if (this.isEditable) {
      // Si está habilitado, deshabilitar los campos
      this.userForm.disable();
    } else {
      // Si está deshabilitado, habilitar los campos
      this.userForm.enable();
    }
    this.isEditable = !this.isEditable; // Cambiar el estado de "editable"
    
  }

  save() {
    this.userForm.disable();
    this.isEditable=false;
    
  }

}
