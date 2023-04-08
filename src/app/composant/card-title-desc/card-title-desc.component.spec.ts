import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleDescComponent } from './card-title-desc.component';

describe('CardTitleDescComponent', () => {
  let component: CardTitleDescComponent;
  let fixture: ComponentFixture<CardTitleDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTitleDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTitleDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
