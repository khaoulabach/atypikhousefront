import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExterneLayoutComponent } from './externe-layout.component';

describe('ExterneLayoutComponent', () => {
  let component: ExterneLayoutComponent;
  let fixture: ComponentFixture<ExterneLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExterneLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExterneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
