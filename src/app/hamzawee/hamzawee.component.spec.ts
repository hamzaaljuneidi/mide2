import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamzaweeComponent } from './hamzawee.component';

describe('HamzaweeComponent', () => {
  let component: HamzaweeComponent;
  let fixture: ComponentFixture<HamzaweeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamzaweeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamzaweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
