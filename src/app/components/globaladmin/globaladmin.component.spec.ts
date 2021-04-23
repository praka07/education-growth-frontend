import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaladminComponent } from './globaladmin.component';

describe('GlobaladminComponent', () => {
  let component: GlobaladminComponent;
  let fixture: ComponentFixture<GlobaladminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobaladminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
