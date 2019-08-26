import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {AuthGuard} from './_guards/auth.guard';

const routes: Routes = [
    {path: 'landing', component: HomeComponent},
    {path: 'sinh-vien', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'home', component: LandingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'forget-password', component: ForgetPasswordComponent},
    {path: 'admission', redirectTo: 'sinh-vien', pathMatch: 'full'},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
