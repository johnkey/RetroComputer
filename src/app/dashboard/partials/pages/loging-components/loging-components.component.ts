import { Component } from '@angular/core';

@Component({
  selector: 'app-loging-components',
  templateUrl: './loging-components.component.html',
  styleUrl: './loging-components.component.scss'
})
export class LogingComponentsComponent {

 submit():any{
   console.log("Login operation");
 }

 register():any{
  console.log("Redirect to register");
}

}
