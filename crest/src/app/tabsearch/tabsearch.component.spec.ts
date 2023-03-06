import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsearchComponent } from './tabsearch.component';

describe('TabsearchComponent', () => {
  let component: TabsearchComponent;
  let fixture: ComponentFixture<TabsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
