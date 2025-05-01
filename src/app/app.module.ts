import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupselectComponent } from './components/signupselect/signupselect.component';
import { SignupstudentComponent } from './components/signupstudent/signupstudent.component';
import { SignupteacherComponent } from './components/signupteacher/signupteacher.component';
import { HomeComponent } from './components/home/home.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MathComponent } from './components/classes/math/math.component';
import { FrenchComponent } from './components/classes/french/french.component';
import { ArabicComponent } from './components/classes/arabic/arabic.component';
import { TeacherprofileComponent } from './components/teacherprofile/teacherprofile.component';
import { FormsModule } from '@angular/forms';
import { ProgressmonitorComponent } from './components/progressmonitor/progressmonitor.component';
import { LessonsGridComponent } from './components/common/lessons-grid/lessons-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupselectComponent,
    SignupstudentComponent,
    SignupteacherComponent,
    HomeComponent,
    ProgressComponent,
    ProfileComponent,
    SettingsComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    MathComponent,
    FrenchComponent,
    ArabicComponent,
    TeacherprofileComponent,
    ProgressmonitorComponent,
    LessonsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
