import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-register',
  imports: [],
  templateUrl: './card-register.component.html',
  styleUrl: './card-register.component.css'
})
export class CardRegisterComponent {

   @Input() user!: {fullName : string , email:string , mobile:string, password : string , confirmPassword : string} | null;

}
