import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { RouterLink, RouterLinkActive ,Router} from "@angular/router";
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  UserStatus !: boolean ; 
  @Output() toggleCart = new EventEmitter<void>();
  _ProductService = inject(ProductsService);
  CartOpenStatus : Boolean = false;
  _AuthService = inject(AuthService);
  router = inject(Router);

  constructor(private toastr: ToastrService){
        this.UserStatus = this._AuthService.isLoggedIn();
  }

   ngOnInit(){
    this._AuthService.loggedIn$.subscribe((status) => {
      this.UserStatus = status;
    })
     }
   

  onCartClick() {
    this.toggleCart.emit();
  }


  logOut(){
     this._AuthService.logout();
    
     this.toastr.info('You have logged out successfully', 'Logout', {
      timeOut: 2500,          // closes automatically after 2.5s
      progressBar: true,
      closeButton: true,
    });
    
     this.router.navigateByUrl('/home');

  }

 
}
