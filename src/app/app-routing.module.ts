import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {StudentInformationComponent} from "./components/student-information/student-information.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {GetAnswerComponent} from "./components/get-answer/get-answer.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {BillboardComponent} from "./components/billboard/billboard.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'get-answer',
        component: GetAnswerComponent,
      },
      {
        path: 'student-information',
        component: StudentInformationComponent
      },
      {
        path:'billboard',
        component: BillboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
