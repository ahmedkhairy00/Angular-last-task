import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductListComponentComponent } from './Components/product-list-component/product-list-component.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { LoginApiComponent } from './Components/login-api/login-api.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    // Default route: redirects to home
    { path: '', redirectTo: 'home', pathMatch: 'full' ,title : "Home Page" },
    // Home page
    { path: 'home', component: HomeComponent , title  : "Home Page" },
    // About Us page
    { path: 'about', component: AboutUsComponent , title : "About-Us Page"},
    // Contact Us page
    { path: 'contact', component: ContactUsComponent , title : " Contact-Us Page"},
    // Products list (shopping cart)
    { path: 'products', component: ProductListComponentComponent , title : "Products Page", canActivate:[authGuard]},
    // Product details by ID
    { path: 'products/:id', component: ProductDetailsComponent  ,title : "Product Deatils Page"},
    // path Register Form
    {path : "register", component : UserRegistrationComponent , title : "Register Page" , canActivate:[loginGuard]},
    // path Login Form
    {path : "login" , component : LoginApiComponent , title : "Login Page" , canActivate:[loginGuard]},
    // Not found (must be last)
    { path: '**', component: NotFoundComponent , title  : "Not Found Page" },
];
// Note: The order of routes matters because Angular uses a first-match-wins strategy. The '**' wildcard must always be last.
