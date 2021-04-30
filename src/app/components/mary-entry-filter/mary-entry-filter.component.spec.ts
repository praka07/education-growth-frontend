import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaryEntryFilterComponent } from './mary-entry-filter.component';

describe('MaryEntryFilterComponent', () => {
  let component: MaryEntryFilterComponent;
  let fixture: ComponentFixture<MaryEntryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaryEntryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaryEntryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
