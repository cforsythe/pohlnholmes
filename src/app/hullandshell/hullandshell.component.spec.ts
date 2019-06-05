import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HullandshellComponent } from './hullandshell.component';

describe('HullandshellComponent', () => {
  let component: HullandshellComponent;
  let fixture: ComponentFixture<HullandshellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HullandshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HullandshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
