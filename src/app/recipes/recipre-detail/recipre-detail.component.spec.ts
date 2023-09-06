import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipreDetailComponent } from './recipre-detail.component';

describe('RecipreDetailComponent', () => {
  let component: RecipreDetailComponent;
  let fixture: ComponentFixture<RecipreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
