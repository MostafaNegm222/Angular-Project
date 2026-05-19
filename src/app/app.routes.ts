import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Main } from './layouts/main/main';
import { Dashboard } from './layouts/dashboard/dashboard';
import { MainDashboard } from './pages/main-dashboard/main-dashboard';
import { Error } from './pages/error/error';
import { ProductDetails } from './pages/product-details/product-details';
import { AddProduct } from './pages/add-product/add-product';
import { UpdateProduct } from './pages/update-product/update-product';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login-guard';
import { adminGuard } from './guards/admin-guard';


export const routes: Routes = [
  {path:"" , redirectTo:"home" ,pathMatch:"full"},
  {path:"" , component:Main ,children:[
    {path:"home" , component:Home , canActivate:[adminGuard]},
    {path:"products" , component:Products},
    {path:"profile" , component:Profile , canActivate:[authGuard]},
    {path:"products/new" , component:AddProduct , canActivate:[authGuard]},
    {path:"products/:id/edit" , component:UpdateProduct},
    {path:"products/:id" , component:ProductDetails},
  ]},
  {path:"admin" , redirectTo:"dashboard" , pathMatch:"full"},
  {path:"admin" , component:Dashboard , canActivate:[adminGuard] , children : [
    {path:"dashboard" , component:MainDashboard }
  ]},
  {path:'auth' , redirectTo:"login", pathMatch:"full"},
  {path:'auth' ,  children : [
    {path:"login" , component:Login , canActivate:[loginGuard]}
  ]},
  {path:"**" , component:Error},
];
