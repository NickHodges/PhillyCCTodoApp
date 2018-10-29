import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneInputComponent } from './telephone-input.component';

describe('TelephoneInputComponent', () => {
  let component: TelephoneInputComponent;
  let fixture: ComponentFixture<TelephoneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
