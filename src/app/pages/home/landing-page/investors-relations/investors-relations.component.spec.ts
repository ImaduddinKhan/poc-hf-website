import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsRelationsComponent } from './investors-relations.component';

describe('InvestorsRelationsComponent', () => {
  let component: InvestorsRelationsComponent;
  let fixture: ComponentFixture<InvestorsRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorsRelationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorsRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
