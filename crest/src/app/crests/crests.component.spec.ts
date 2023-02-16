import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrestsComponent } from './crests.component';

describe('CrestsComponent', () => {
  let component: CrestsComponent;
  let fixture: ComponentFixture<CrestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
