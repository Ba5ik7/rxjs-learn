import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultifemptyComponent } from './defaultifempty.component';

describe('DefaultifemptyComponent', () => {
  let component: DefaultifemptyComponent;
  let fixture: ComponentFixture<DefaultifemptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultifemptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultifemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
