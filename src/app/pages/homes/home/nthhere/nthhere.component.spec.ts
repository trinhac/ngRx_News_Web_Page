import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthhereComponent } from './nthhere.component';

describe('NthhereComponent', () => {
  let component: NthhereComponent;
  let fixture: ComponentFixture<NthhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NthhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NthhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
