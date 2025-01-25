import { Component } from "@angular/core";

@Component({
  selector: "app-scroll-animation",
  standalone: true,
  imports: [],
  templateUrl: "./scroll-animation.component.html",
  styleUrl: "./scroll-animation.component.scss",
})
export class ScrollAnimationComponent {
  imageIndex: number = 0; // Tracks the current frame
  imageCount: number = 120; // The number of PNGs in the sequence
  imageArray: string[] = [];
  animationInterval: any;

  ngOnInit(): void {
    this.preloadImages();
    this.startAnimation();
  }

  preloadImages(): void {
    for (let i = 0; i < this.imageCount; i++) {
      const img = new Image();
      img.src = `/assets/images/scroll_animation/${this.generatePngSequenceText(i)}.png`; // Adjust the path to your PNGs
      this.imageArray.push(img.src);
    }
  }
  generatePngSequenceText(counter: number): string {
    // Convert the counter to a string and pad with leading zeros to make it 5 digits
    const paddedCounter = counter.toString().padStart(5, '0');
    
    // Return the formatted string
    return `Scroll_00000_${paddedCounter}`;
  }
  startAnimation(): void {
    this.animationInterval = setInterval(() => {
      // Log the current formatted text
      // console.log(this.generatePngSequenceText(this.imageIndex + 1));

      // Move to the next image, looping back to 0 if it reaches the end
      this.imageIndex = (this.imageIndex + 1) % this.imageCount;
    }, 100); // Change frame every 100ms (adjust as needed)
  }

  ngOnDestroy(): void {
    clearInterval(this.animationInterval); // Stop the animation when the component is destroyed
  }
}
