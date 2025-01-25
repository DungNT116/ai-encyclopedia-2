import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSequencePlayerComponent } from './image-sequence-player.component';

describe('ImageSequencePlayerComponent', () => {
  let component: ImageSequencePlayerComponent;
  let fixture: ComponentFixture<ImageSequencePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSequencePlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSequencePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
