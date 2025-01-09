import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosarkaComponent } from './kosarka.component';

describe('KosarkaComponent', () => {
  let component: KosarkaComponent;
  let fixture: ComponentFixture<KosarkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KosarkaComponent]
    });
    fixture = TestBed.createComponent(KosarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
