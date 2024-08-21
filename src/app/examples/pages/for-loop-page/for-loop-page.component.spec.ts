import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopPageComponent } from './for-loop-page.component';

describe('ForLoopPageComponent', () => {
  let component: ForLoopPageComponent;
  let fixture: ComponentFixture<ForLoopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForLoopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
