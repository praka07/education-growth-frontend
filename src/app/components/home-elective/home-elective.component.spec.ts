import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElectiveComponent } from './home-elective.component';

describe('HomeElectiveComponent', () => {
  let component: HomeElectiveComponent;
  let fixture: ComponentFixture<HomeElectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeElectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
