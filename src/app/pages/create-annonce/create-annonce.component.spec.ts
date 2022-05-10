import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnonceComponent } from './create-annonce.component';

describe('CreateAnnonceComponent', () => {
  let component: CreateAnnonceComponent;
  let fixture: ComponentFixture<CreateAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
