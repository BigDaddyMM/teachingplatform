import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from './constants/route.enum';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupselectComponent } from './components/signupselect/signupselect.component';
import { HomeComponent } from './components/home/home.component';
import { SignupstudentComponent } from './components/signupstudent/signupstudent.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupteacherComponent } from './components/signupteacher/signupteacher.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MathComponent } from './components/classes/math/math.component';
import { FrenchComponent } from './components/classes/french/french.component';
import { ArabicComponent } from './components/classes/arabic/arabic.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TeacherprofileComponent } from './components/teacherprofile/teacherprofile.component';
import { ProgressmonitorComponent } from './components/progressmonitor/progressmonitor.component';
import { Mathlesson1Component } from './components/lessons/mathlessons/mathlesson1/mathlesson1.component';
import { Mathlesson10Component } from './components/lessons/mathlessons/mathlesson10/mathlesson10.component';
import { Mathlesson2Component } from './components/lessons/mathlessons/mathlesson2/mathlesson2.component';
import { Mathlesson3Component } from './components/lessons/mathlessons/mathlesson3/mathlesson3.component';
import { Mathlesson4Component } from './components/lessons/mathlessons/mathlesson4/mathlesson4.component';
import { Mathlesson5Component } from './components/lessons/mathlessons/mathlesson5/mathlesson5.component';
import { Mathlesson6Component } from './components/lessons/mathlessons/mathlesson6/mathlesson6.component';
import { Mathlesson7Component } from './components/lessons/mathlessons/mathlesson7/mathlesson7.component';
import { Mathlesson8Component } from './components/lessons/mathlessons/mathlesson8/mathlesson8.component';
import { Mathlesson9Component } from './components/lessons/mathlessons/mathlesson9/mathlesson9.component';
import { Arabiclesson1Component } from './components/lessons/arabiclessons/arabiclesson1/arabiclesson1.component';
import { Arabiclesson10Component } from './components/lessons/arabiclessons/arabiclesson10/arabiclesson10.component';
import { Arabiclesson2Component } from './components/lessons/arabiclessons/arabiclesson2/arabiclesson2.component';
import { Arabiclesson3Component } from './components/lessons/arabiclessons/arabiclesson3/arabiclesson3.component';
import { Arabiclesson4Component } from './components/lessons/arabiclessons/arabiclesson4/arabiclesson4.component';
import { Arabiclesson5Component } from './components/lessons/arabiclessons/arabiclesson5/arabiclesson5.component';
import { Arabiclesson6Component } from './components/lessons/arabiclessons/arabiclesson6/arabiclesson6.component';
import { Arabiclesson7Component } from './components/lessons/arabiclessons/arabiclesson7/arabiclesson7.component';
import { Arabiclesson8Component } from './components/lessons/arabiclessons/arabiclesson8/arabiclesson8.component';
import { Arabiclesson9Component } from './components/lessons/arabiclessons/arabiclesson9/arabiclesson9.component';
import { IslamicComponent } from './components/classes/islamic/islamic.component';
import { ScienceComponent } from './components/classes/science/science.component';
import { Islamiclesson1Component } from './components/lessons/islamiclessons/islamiclesson1/islamiclesson1.component';
import { Islamiclesson10Component } from './components/lessons/islamiclessons/islamiclesson10/islamiclesson10.component';
import { Islamiclesson2Component } from './components/lessons/islamiclessons/islamiclesson2/islamiclesson2.component';
import { Islamiclesson3Component } from './components/lessons/islamiclessons/islamiclesson3/islamiclesson3.component';
import { Islamiclesson4Component } from './components/lessons/islamiclessons/islamiclesson4/islamiclesson4.component';
import { Islamiclesson5Component } from './components/lessons/islamiclessons/islamiclesson5/islamiclesson5.component';
import { Islamiclesson6Component } from './components/lessons/islamiclessons/islamiclesson6/islamiclesson6.component';
import { Islamiclesson7Component } from './components/lessons/islamiclessons/islamiclesson7/islamiclesson7.component';
import { Islamiclesson8Component } from './components/lessons/islamiclessons/islamiclesson8/islamiclesson8.component';
import { Islamiclesson9Component } from './components/lessons/islamiclessons/islamiclesson9/islamiclesson9.component';
import { Frenchlesson1Component } from './components/lessons/frenchlessons/frenchlesson1/frenchlesson1.component';
import { Frenchlesson10Component } from './components/lessons/frenchlessons/frenchlesson10/frenchlesson10.component';
import { Frenchlesson2Component } from './components/lessons/frenchlessons/frenchlesson2/frenchlesson2.component';
import { Frenchlesson3Component } from './components/lessons/frenchlessons/frenchlesson3/frenchlesson3.component';
import { Frenchlesson4Component } from './components/lessons/frenchlessons/frenchlesson4/frenchlesson4.component';
import { Frenchlesson5Component } from './components/lessons/frenchlessons/frenchlesson5/frenchlesson5.component';
import { Frenchlesson6Component } from './components/lessons/frenchlessons/frenchlesson6/frenchlesson6.component';
import { Frenchlesson7Component } from './components/lessons/frenchlessons/frenchlesson7/frenchlesson7.component';
import { Frenchlesson8Component } from './components/lessons/frenchlessons/frenchlesson8/frenchlesson8.component';
import { Frenchlesson9Component } from './components/lessons/frenchlessons/frenchlesson9/frenchlesson9.component';
import { Sciencelesson1Component } from './components/lessons/sciencelessons/sciencelesson1/sciencelesson1.component';
import { Sciencelesson10Component } from './components/lessons/sciencelessons/sciencelesson10/sciencelesson10.component';
import { Sciencelesson2Component } from './components/lessons/sciencelessons/sciencelesson2/sciencelesson2.component';
import { Sciencelesson3Component } from './components/lessons/sciencelessons/sciencelesson3/sciencelesson3.component';
import { Sciencelesson4Component } from './components/lessons/sciencelessons/sciencelesson4/sciencelesson4.component';
import { Sciencelesson5Component } from './components/lessons/sciencelessons/sciencelesson5/sciencelesson5.component';
import { Sciencelesson6Component } from './components/lessons/sciencelessons/sciencelesson6/sciencelesson6.component';
import { Sciencelesson7Component } from './components/lessons/sciencelessons/sciencelesson7/sciencelesson7.component';
import { Sciencelesson8Component } from './components/lessons/sciencelessons/sciencelesson8/sciencelesson8.component';
import { Sciencelesson9Component } from './components/lessons/sciencelessons/sciencelesson9/sciencelesson9.component';

const routes: Routes = [
  {
    path: Route.EMPTY,
    component: LandingComponent,
  },
  {
    path: Route.LOGIN,
    component: LoginComponent,
  },
  {
    path: Route.SIGNUP,
    component: SignupselectComponent,
  },
  {
    path: Route.HOME,
    component: HomeComponent,
  },
  {
    path: Route.TEACHERSU,
    component: SignupteacherComponent,
  },
  {
    path: Route.STUDENTSU,
    component: SignupstudentComponent,
  },
  {
    path: Route.PROFILE,
    component: ProfileComponent,
  },
  {
    path: Route.SETTINGS,
    component: SettingsComponent,
  },
  {
    path: 'mathematics',
    component: MathComponent,
  },
  {
    path: 'french',
    component: FrenchComponent,
  },
  {
    path: 'arabic',
    component: ArabicComponent,
  },
  {
    path: 'islamic',
    component: IslamicComponent,
  },
  {
    path: 'science',
    component: ScienceComponent,
  },
  {
    path: Route.PROGRESS,
    component: ProgressComponent,
  },
  {
    path: Route.TEACHERPROFILE,
    component: TeacherprofileComponent,
  },
  {
    path: Route.PROGRESSMONITOR,
    component: ProgressmonitorComponent,
  },
  { path: 'lessons/mathlesson1', component: Mathlesson1Component },
  { path: 'lessons/mathlesson2', component: Mathlesson2Component },
  { path: 'lessons/mathlesson3', component: Mathlesson3Component },
  { path: 'lessons/mathlesson4', component: Mathlesson4Component },
  { path: 'lessons/mathlesson5', component: Mathlesson5Component },
  { path: 'lessons/mathlesson6', component: Mathlesson6Component },
  { path: 'lessons/mathlesson7', component: Mathlesson7Component },
  { path: 'lessons/mathlesson8', component: Mathlesson8Component },
  { path: 'lessons/mathlesson9', component: Mathlesson9Component },
  { path: 'lessons/mathlesson10', component: Mathlesson10Component },
  { path: 'lessons/arabiclesson1', component: Arabiclesson1Component },
{ path: 'lessons/arabiclesson2', component: Arabiclesson2Component },
{ path: 'lessons/arabiclesson3', component: Arabiclesson3Component },
{ path: 'lessons/arabiclesson4', component: Arabiclesson4Component },
{ path: 'lessons/arabiclesson5', component: Arabiclesson5Component },
{ path: 'lessons/arabiclesson6', component: Arabiclesson6Component },
{ path: 'lessons/arabiclesson7', component: Arabiclesson7Component },
{ path: 'lessons/arabiclesson8', component: Arabiclesson8Component },
{ path: 'lessons/arabiclesson9', component: Arabiclesson9Component },
{ path: 'lessons/arabiclesson10', component: Arabiclesson10Component },
{ path: 'lessons/islamiclesson1', component: Islamiclesson1Component },
{ path: 'lessons/islamiclesson2', component: Islamiclesson2Component },
{ path: 'lessons/islamiclesson3', component: Islamiclesson3Component },
{ path: 'lessons/islamiclesson4', component: Islamiclesson4Component },
{ path: 'lessons/islamiclesson5', component: Islamiclesson5Component },
{ path: 'lessons/islamiclesson6', component: Islamiclesson6Component },
{ path: 'lessons/islamiclesson7', component: Islamiclesson7Component },
{ path: 'lessons/islamiclesson8', component: Islamiclesson8Component },
{ path: 'lessons/islamiclesson9', component: Islamiclesson9Component },
{ path: 'lessons/islamiclesson10', component: Islamiclesson10Component },
{ path: 'lessons/frenchlesson1', component: Frenchlesson1Component },
{ path: 'lessons/frenchlesson2', component: Frenchlesson2Component },
{ path: 'lessons/frenchlesson3', component: Frenchlesson3Component },
{ path: 'lessons/frenchlesson4', component: Frenchlesson4Component },
{ path: 'lessons/frenchlesson5', component: Frenchlesson5Component },
{ path: 'lessons/frenchlesson6', component: Frenchlesson6Component },
{ path: 'lessons/frenchlesson7', component: Frenchlesson7Component },
{ path: 'lessons/frenchlesson8', component: Frenchlesson8Component },
{ path: 'lessons/frenchlesson9', component: Frenchlesson9Component },
{ path: 'lessons/frenchlesson10', component: Frenchlesson10Component },
{ path: 'lessons/sciencelesson1', component: Sciencelesson1Component },
{ path: 'lessons/sciencelesson2', component: Sciencelesson2Component },
{ path: 'lessons/sciencelesson3', component: Sciencelesson3Component },
{ path: 'lessons/sciencelesson4', component: Sciencelesson4Component },
{ path: 'lessons/sciencelesson5', component: Sciencelesson5Component },
{ path: 'lessons/sciencelesson6', component: Sciencelesson6Component },
{ path: 'lessons/sciencelesson7', component: Sciencelesson7Component },
{ path: 'lessons/sciencelesson8', component: Sciencelesson8Component },
{ path: 'lessons/sciencelesson9', component: Sciencelesson9Component },
{ path: 'lessons/sciencelesson10', component: Sciencelesson10Component },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
