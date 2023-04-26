import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMerchantsComponent } from './for-merchants.component';

describe('ForMerchantsComponent', () => {
  let component: ForMerchantsComponent;
  let fixture: ComponentFixture<ForMerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForMerchantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
