import { Component, inject } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


type User = {
    username : string,
    password : string,
  }

@Component({
  selector: 'app-login-api',
  imports: [FormsModule],
  templateUrl: './login-api.component.html',
  styleUrl: './login-api.component.css'
})
export class LoginApiComponent {
  

user : User = { username : 'mor_2314' , password : '83r5^_'}; 
router  = inject(Router);
constructor(private Auth : AuthService , private toastr: ToastrService){}

  onSubmit(){
    const {username , password} = this.user;
     this.Auth.login(username , password).subscribe( {
         next : () => {
               this.toastr.success('Login Successfully ✅', 'Success');
                  this.router.navigate(['/products']);
         } ,
         error : (err) =>{
          console.error(err.error.message);
          this.toastr.error('Invalid credentials ❌', 'Login Failed'); // ✅ show error toast
         }
     })
  }
}
