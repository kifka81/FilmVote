import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopShowComponent } from './top-show.component';

describe('TopShowComponent', () => {
  let component: TopShowComponent;
  let fixture: ComponentFixture<TopShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
