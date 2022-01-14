import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenshutzComponent } from './datenshutz.component';

describe('DatenshutzComponent', () => {
  let component: DatenshutzComponent;
  let fixture: ComponentFixture<DatenshutzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenshutzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenshutzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
