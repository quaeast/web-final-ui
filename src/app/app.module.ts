import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './components/login/login.component';
import {
  NgZorroAntdModule, NzBreadCrumbModule,
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule, NzLayoutModule, NzMenuModule
} from "ng-zorro-antd";
import { StudentInformationComponent } from './components/student-information/student-information.component';
import { GetAnswerComponent } from './components/get-answer/get-answer.component';
import { LayoutComponent } from './components/layout/layout.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentInformationComponent,
    GetAnswerComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
