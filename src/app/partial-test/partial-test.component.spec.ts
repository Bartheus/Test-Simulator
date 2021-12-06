import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialTestComponent } from './partial-test.component';

describe('PartialTestComponent', () => {
  let component: PartialTestComponent;
  let fixture: ComponentFixture<PartialTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
