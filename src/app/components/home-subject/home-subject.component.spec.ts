import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubjectComponent } from './home-subject.component';

describe('HomeSubjectComponent', () => {
  let component: HomeSubjectComponent;
  let fixture: ComponentFixture<HomeSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
