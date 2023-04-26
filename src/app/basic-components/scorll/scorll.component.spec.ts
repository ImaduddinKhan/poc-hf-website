import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorllComponent } from './scorll.component';

describe('ScorllComponent', () => {
  let component: ScorllComponent;
  let fixture: ComponentFixture<ScorllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
