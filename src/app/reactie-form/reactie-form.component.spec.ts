import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactieFormComponent } from './reactie-form.component';

describe('ReactieFormComponent', () => {
  let component: ReactieFormComponent;
  let fixture: ComponentFixture<ReactieFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactieFormComponent]
    });
    fixture = TestBed.createComponent(ReactieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
