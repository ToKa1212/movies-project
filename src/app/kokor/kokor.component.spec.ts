import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokorComponent } from './kokor.component';

describe('KokorComponent', () => {
  let component: KokorComponent;
  let fixture: ComponentFixture<KokorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
