import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1Component } from './bai1.component';

describe('Bai1Component', () => {
  let component: Bai1Component;
  let fixture: ComponentFixture<Bai1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
