import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFishesComponent } from './top-fishes.component';

describe('TopFishesComponent', () => {
  let component: TopFishesComponent;
  let fixture: ComponentFixture<TopFishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
