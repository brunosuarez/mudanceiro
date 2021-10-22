import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMudanceiroComponent } from './registration-mudanceiro.component';

describe('RegistrationMudanceiroComponent', () => {
  let component: RegistrationMudanceiroComponent;
  let fixture: ComponentFixture<RegistrationMudanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationMudanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMudanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
