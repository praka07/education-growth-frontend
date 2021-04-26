import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectiveComponent } from './create-elective.component';

describe('CreateElectiveComponent', () => {
  let component: CreateElectiveComponent;
  let fixture: ComponentFixture<CreateElectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateElectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
