import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeareComponent } from './weare.component';

describe('WeareComponent', () => {
  let component: WeareComponent;
  let fixture: ComponentFixture<WeareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
