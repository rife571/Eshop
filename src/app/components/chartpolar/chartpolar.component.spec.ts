import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpolarComponent } from './chartpolar.component';

describe('ChartpolarComponent', () => {
  let component: ChartpolarComponent;
  let fixture: ComponentFixture<ChartpolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartpolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartpolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
