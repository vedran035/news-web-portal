import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudbalComponent } from './fudbal.component';

describe('FudbalComponent', () => {
  let component: FudbalComponent;
  let fixture: ComponentFixture<FudbalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudbalComponent]
    });
    fixture = TestBed.createComponent(FudbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
