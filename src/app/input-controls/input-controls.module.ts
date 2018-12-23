import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FirstNameInputComponent } from './first-name-input/first-name-input.component';
import { LastNameInputComponent } from './last-name-input/last-name-input.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { TelephoneInputComponent } from './telephone-input/telephone-input.component';
import { EmailInputComponent } from './email-input/email-input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule
  ],
  declarations: [
    EmailInputComponent,
    FirstNameInputComponent,
    LastNameInputComponent,
    MessageInputComponent,
    TelephoneInputComponent
  ],
  exports: [
    EmailInputComponent,
    FirstNameInputComponent,
    LastNameInputComponent,
    MessageInputComponent,
    TelephoneInputComponent
  ]
})
export class InputControlsModule {}
