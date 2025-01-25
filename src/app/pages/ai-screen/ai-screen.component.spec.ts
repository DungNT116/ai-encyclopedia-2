import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiScreenComponent } from './ai-screen.component';

describe('AiScreenComponent', () => {
  let component: AiScreenComponent;
  let fixture: ComponentFixture<AiScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
