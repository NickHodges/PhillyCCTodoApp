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

// Added for Step 15
import { ContactComponent } from './contact-form/contact-form.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { TelephoneInputComponent } from './telephone-input/telephone-input.component';
import { FirstNameInputComponent } from './first-name-input/first-name-input.component';
import { LastNameInputComponent } from './last-name-input/last-name-input.component';
import { MessageInputComponent } from './message-input/message-input.component';

@NgModule({
  declarations: [
    AppComponent,
    // Added in Step 3
    AboutComponent,
    TodoListComponent,
    NavbarComponent,
    // Added for Step 15
    ContactComponent,
    EmailInputComponent,
    FirstNameInputComponent,
    TelephoneInputComponent,
    LastNameInputComponent,
    MessageInputComponent,
    // Added in Step 8
    AddTodoComponent,
    // Added in Step 4
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    // Added for Step 5
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // Added Material references for Step 16
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  entryComponents: [EmailInputComponent],
  // Added for Step 5
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
