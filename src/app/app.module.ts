import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
import { AddTodoComponent } from './add-todo/add-todo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ContactComponent } from './contact-form/contact-form.component';
import { EmailInputComponent } from './email-input/email-input.component';
import {
  FormFieldCustomControlComponent,
  TelephoneInputComponent
} from './telephone-input/telephone-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodoListComponent,
    NavbarComponent,
    AllTasksComponent,
    AddTodoComponent,
    ContactComponent,
    EmailInputComponent,
    TelephoneInputComponent,
    FormFieldCustomControlComponent,
    TelephoneInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [TodoDataService],
  entryComponents: [FormFieldCustomControlComponent, TelephoneInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
