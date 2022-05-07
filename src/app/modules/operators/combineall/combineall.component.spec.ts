import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineallComponent } from './combineall.component';

describe('CombineallComponent', () => {
  let component: CombineallComponent;
  let fixture: ComponentFixture<CombineallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
