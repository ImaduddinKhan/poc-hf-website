import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInvestorsComponent } from './for-investors.component';

describe('ForInvestorsComponent', () => {
  let component: ForInvestorsComponent;
  let fixture: ComponentFixture<ForInvestorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForInvestorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
