import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBatchComponent } from './home-batch.component';

describe('HomeBatchComponent', () => {
  let component: HomeBatchComponent;
  let fixture: ComponentFixture<HomeBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
