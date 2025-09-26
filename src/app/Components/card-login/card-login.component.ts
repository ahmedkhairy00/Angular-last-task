import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-card-login',
  imports: [],
  standalone :true,
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.css'
})
export class CardLoginComponent {
 @Input() user!: {email : string , password : string} | null;

}
