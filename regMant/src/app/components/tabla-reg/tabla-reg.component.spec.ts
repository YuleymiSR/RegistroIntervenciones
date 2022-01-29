import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRegComponent } from './tabla-reg.component';

describe('TablaRegComponent', () => {
  let component: TablaRegComponent;
  let fixture: ComponentFixture<TablaRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
