import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentsComponent } from './login-components.component';

describe('LoginComponentsComponent', () => {
  let component: LoginComponentsComponent;
  let fixture: ComponentFixture<LoginComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
