 
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: "app-image-sequence-player",
  standalone: true,
  imports: [],
  templateUrl: "./image-sequence-player.component.html",
  styleUrls: ["./image-sequence-player.component.scss"],
})
export class ImageSequencePlayerComponent implements OnInit, OnDestroy {
  @Input() imgSource = '';
  @Input() fps: number = 30; // Default frame rate
  @Input() imageCount: number = 248; // Default number of images
  @Input() loopRangeStart: number = -1; // Start index for loop (default is -1, meaning no loop)
  @Input() loopRangeEnd: number = -1; // End index for loop (default is -1, meaning no loop)
  imageIndex: number = 0; // Start with the first image
  imageSrc: string = ''; // Store the image source
  interval: any;
  hasLoopedOnce: boolean = false; // Flag to track if the sequence has looped once

  ngOnInit(): void {
    this.loadImage();
    this.startImageSequence();
  }


  // Load the image based on the current index
  loadImage(): void {
    this.imageSrc = `${this.imgSource}_${(this.imageIndex + 1)
      .toString()
      .padStart(5, "0")}.png`;
  }


  // Start the sequence of images with the configured FPS
  startImageSequence(): void {
    this.interval = setInterval(() => {
      if (!this.hasLoopedOnce) {
        // Running the full sequence once
        if (this.imageIndex < this.imageCount - 1) {
          this.imageIndex++; // Continue incrementing normally
        } else {
          this.hasLoopedOnce = true; // Mark that the first cycle is done
          this.imageIndex = 0; // Reset to the first image for the next cycle
        }
      } else {
        // After the first cycle, start looping from the specified range if defined
        if (this.loopRangeStart >= 0 && this.loopRangeEnd >= 0) {
          if (this.imageIndex >= this.loopRangeEnd) {
            this.imageIndex = this.loopRangeStart; // Loop back to the start of the specified range
          } else {
            this.imageIndex++; // Continue incrementing within the range
          }
        } else {
          // If no loop range is defined, stop the sequence at the last image
          clearInterval(this.interval);
        }
      }

      this.loadImage(); // Update the image source with the current index
    }, 1000 / this.fps); // Adjust timing for FPS
  }

  // Stop the sequence when the component is destroyed
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
