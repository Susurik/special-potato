// import { CurrencyComponent } from './components/pages/currency/currency.component';
import { NewsComponent } from './components/pages/news/news.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './components/pages/login/login.component';
// import { HomeComponent } from './components/pages/home/home.component';
// import { RegisterComponent } from './components/pages/register/register.component';
// import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
// import { AuthguardGuard } from './authguard.guard';

// const routes: Routes = [
// { path: '', component: LoginComponent },
// { path: 'login', component: LoginComponent },
// { path: 'home', component: HomeComponent },
// { path: 'registration', component: RegisterComponent },
// { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }

// ]

// @NgModule({
// imports: [RouterModule.forRoot(routes)],
// exports: [RouterModule]
// })

// export class AppRoutingModule { }