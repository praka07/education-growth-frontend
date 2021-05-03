import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGenerateReportComponent } from './student-generate-report.component';

describe('StudentGenerateReportComponent', () => {
  let component: StudentGenerateReportComponent;
  let fixture: ComponentFixture<StudentGenerateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGenerateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGenerateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
