import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountComponent } from './amount.component';

describe('AmountComponent', () => {
  let component: AmountComponent;
  let fixture: ComponentFixture<AmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
