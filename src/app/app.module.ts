import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {SignupComponent} from './signup/signup.component';
import {LandingComponent} from './landing/landing.component';
import {ProfileComponent} from './profile/profile.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeModule} from './home/home.module';
import {LoginComponent} from './login/login.component';
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {NewsDetailComponent} from './news/news-detail/news-detail.component';
import {ListOfNewsComponent} from './news/list-of-news/list-of-news.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import { AdmissionComponent } from './admission/admission.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxLoadingModule} from 'ngx-loading';
import {JwtInterceptor} from './_core/jwt.interceptor';
import {HttpErrorInterceptor} from './_core/http-error.interceptor';
import {NgxPrintModule} from 'ngx-print';
import { TuitionComponent } from './tuition/tuition.component';
import {SafePipe} from './_pipe/safe.pipe';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LandingComponent,
        ProfileComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        ContactFormComponent,
        AboutUsComponent,
        NewsDetailComponent,
        ListOfNewsComponent,
        ForgetPasswordComponent,
        AdmissionComponent,
        TuitionComponent,
        SafePipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxPrintModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        NgxLoadingModule.forRoot({})
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
