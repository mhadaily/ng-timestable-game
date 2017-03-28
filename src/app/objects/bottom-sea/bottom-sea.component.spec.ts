import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSeaComponent } from './bottom-sea.component';

describe('BottomSeaComponent', () => {
  let component: BottomSeaComponent;
  let fixture: ComponentFixture<BottomSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [BottomSeaComponent],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
