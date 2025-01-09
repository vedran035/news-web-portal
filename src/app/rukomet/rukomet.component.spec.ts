import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RukometComponent } from './rukomet.component';

describe('RukometComponent', () => {
  let component: RukometComponent;
  let fixture: ComponentFixture<RukometComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RukometComponent]
    });
    fixture = TestBed.createComponent(RukometComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
