import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSiteCateComponent } from './main-site-cate.component';

describe('MainSiteCateComponent', () => {
  let component: MainSiteCateComponent;
  let fixture: ComponentFixture<MainSiteCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSiteCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSiteCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
