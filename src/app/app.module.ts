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
import { Mathlesson1Component } from './components/lessons/mathlessons/mathlesson1/mathlesson1.component';
import { Mathlesson2Component } from './components/lessons/mathlessons/mathlesson2/mathlesson2.component';
import { Arabiclesson2Component } from './components/lessons/arabiclessons/arabiclesson2/arabiclesson2.component';
import { Arabiclesson1Component } from './components/lessons/arabiclessons/arabiclesson1/arabiclesson1.component';
import { Arabiclesson3Component } from './components/lessons/arabiclessons/arabiclesson3/arabiclesson3.component';
import { Arabiclesson4Component } from './components/lessons/arabiclessons/arabiclesson4/arabiclesson4.component';
import { Arabiclesson5Component } from './components/lessons/arabiclessons/arabiclesson5/arabiclesson5.component';
import { Arabiclesson6Component } from './components/lessons/arabiclessons/arabiclesson6/arabiclesson6.component';
import { Arabiclesson7Component } from './components/lessons/arabiclessons/arabiclesson7/arabiclesson7.component';
import { Arabiclesson8Component } from './components/lessons/arabiclessons/arabiclesson8/arabiclesson8.component';
import { Arabiclesson9Component } from './components/lessons/arabiclessons/arabiclesson9/arabiclesson9.component';
import { Arabiclesson10Component } from './components/lessons/arabiclessons/arabiclesson10/arabiclesson10.component';
import { Mathlesson3Component } from './components/lessons/mathlessons/mathlesson3/mathlesson3.component';
import { Mathlesson4Component } from './components/lessons/mathlessons/mathlesson4/mathlesson4.component';
import { Mathlesson5Component } from './components/lessons/mathlessons/mathlesson5/mathlesson5.component';
import { Mathlesson6Component } from './components/lessons/mathlessons/mathlesson6/mathlesson6.component';
import { Mathlesson7Component } from './components/lessons/mathlessons/mathlesson7/mathlesson7.component';
import { Mathlesson8Component } from './components/lessons/mathlessons/mathlesson8/mathlesson8.component';
import { Mathlesson9Component } from './components/lessons/mathlessons/mathlesson9/mathlesson9.component';
import { Mathlesson10Component } from './components/lessons/mathlessons/mathlesson10/mathlesson10.component';
import { Frenchlesson1Component } from './components/lessons/frenchlessons/frenchlesson1/frenchlesson1.component';
import { ScienceComponent } from './components/classes/science/science.component';
import { IslamicComponent } from './components/classes/islamic/islamic.component';
import { Frenchlesson2Component } from './components/lessons/frenchlessons/frenchlesson2/frenchlesson2.component';
import { Frenchlesson3Component } from './components/lessons/frenchlessons/frenchlesson3/frenchlesson3.component';
import { Frenchlesson4Component } from './components/lessons/frenchlessons/frenchlesson4/frenchlesson4.component';
import { Frenchlesson5Component } from './components/lessons/frenchlessons/frenchlesson5/frenchlesson5.component';
import { Frenchlesson6Component } from './components/lessons/frenchlessons/frenchlesson6/frenchlesson6.component';
import { Frenchlesson7Component } from './components/lessons/frenchlessons/frenchlesson7/frenchlesson7.component';
import { Frenchlesson8Component } from './components/lessons/frenchlessons/frenchlesson8/frenchlesson8.component';
import { Frenchlesson9Component } from './components/lessons/frenchlessons/frenchlesson9/frenchlesson9.component';
import { Frenchlesson10Component } from './components/lessons/frenchlessons/frenchlesson10/frenchlesson10.component';
import { Islamiclesson1Component } from './components/lessons/islamiclessons/islamiclesson1/islamiclesson1.component';
import { Islamiclesson2Component } from './components/lessons/islamiclessons/islamiclesson2/islamiclesson2.component';
import { Islamiclesson3Component } from './components/lessons/islamiclessons/islamiclesson3/islamiclesson3.component';
import { Islamiclesson4Component } from './components/lessons/islamiclessons/islamiclesson4/islamiclesson4.component';
import { Islamiclesson5Component } from './components/lessons/islamiclessons/islamiclesson5/islamiclesson5.component';
import { Islamiclesson6Component } from './components/lessons/islamiclessons/islamiclesson6/islamiclesson6.component';
import { Islamiclesson7Component } from './components/lessons/islamiclessons/islamiclesson7/islamiclesson7.component';
import { Islamiclesson8Component } from './components/lessons/islamiclessons/islamiclesson8/islamiclesson8.component';
import { Islamiclesson9Component } from './components/lessons/islamiclessons/islamiclesson9/islamiclesson9.component';
import { Islamiclesson10Component } from './components/lessons/islamiclessons/islamiclesson10/islamiclesson10.component';
import { Sciencelesson1Component } from './components/lessons/sciencelessons/sciencelesson1/sciencelesson1.component';
import { Sciencelesson2Component } from './components/lessons/sciencelessons/sciencelesson2/sciencelesson2.component';
import { Sciencelesson3Component } from './components/lessons/sciencelessons/sciencelesson3/sciencelesson3.component';
import { Sciencelesson4Component } from './components/lessons/sciencelessons/sciencelesson4/sciencelesson4.component';
import { Sciencelesson5Component } from './components/lessons/sciencelessons/sciencelesson5/sciencelesson5.component';
import { Sciencelesson6Component } from './components/lessons/sciencelessons/sciencelesson6/sciencelesson6.component';
import { Sciencelesson7Component } from './components/lessons/sciencelessons/sciencelesson7/sciencelesson7.component';
import { Sciencelesson8Component } from './components/lessons/sciencelessons/sciencelesson8/sciencelesson8.component';
import { Sciencelesson9Component } from './components/lessons/sciencelessons/sciencelesson9/sciencelesson9.component';
import { Sciencelesson10Component } from './components/lessons/sciencelessons/sciencelesson10/sciencelesson10.component';

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
    LessonsGridComponent,
    Mathlesson1Component,
    Mathlesson2Component,
    Arabiclesson2Component,
    Arabiclesson1Component,
    Arabiclesson3Component,
    Arabiclesson4Component,
    Arabiclesson5Component,
    Arabiclesson6Component,
    Arabiclesson7Component,
    Arabiclesson8Component,
    Arabiclesson9Component,
    Arabiclesson10Component,
    Mathlesson3Component,
    Mathlesson4Component,
    Mathlesson5Component,
    Mathlesson6Component,
    Mathlesson7Component,
    Mathlesson8Component,
    Mathlesson9Component,
    Mathlesson10Component,
    Frenchlesson1Component,
    ScienceComponent,
    IslamicComponent,
    Frenchlesson2Component,
    Frenchlesson3Component,
    Frenchlesson4Component,
    Frenchlesson5Component,
    Frenchlesson6Component,
    Frenchlesson7Component,
    Frenchlesson8Component,
    Frenchlesson9Component,
    Frenchlesson10Component,
    Islamiclesson1Component,
    Islamiclesson2Component,
    Islamiclesson3Component,
    Islamiclesson4Component,
    Islamiclesson5Component,
    Islamiclesson6Component,
    Islamiclesson7Component,
    Islamiclesson8Component,
    Islamiclesson9Component,
    Islamiclesson10Component,
    Sciencelesson1Component,
    Sciencelesson2Component,
    Sciencelesson3Component,
    Sciencelesson4Component,
    Sciencelesson5Component,
    Sciencelesson6Component,
    Sciencelesson7Component,
    Sciencelesson8Component,
    Sciencelesson9Component,
    Sciencelesson10Component
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
