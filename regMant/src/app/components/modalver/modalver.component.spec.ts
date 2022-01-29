import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalverComponent } from './modalver.component';

describe('ModalverComponent', () => {
  let component: ModalverComponent;
  let fixture: ComponentFixture<ModalverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
