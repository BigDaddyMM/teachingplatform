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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
