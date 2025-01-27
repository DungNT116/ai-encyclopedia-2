import {
  Component,
  HostListener,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { ScrollAnimationComponent } from "./components/scroll-animation/scroll-animation.component";
import { HeaderComponent } from "./components/header/header.component";
import { sections, sectionScroll } from "./app.routes";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ScrollAnimationComponent, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [
    trigger("fadeInFromLeft", [
      transition(":enter", [
        animate(
          "1s ease-out",
          keyframes([
            style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }), // Starting from the left
            style({ opacity: 1, transform: "translateX(0)", offset: 1 }), // Ending at the center
          ])
        ),
      ]),
    ]),

    trigger("fadeInPresentFromLeft", [
      transition(":enter", [
        animate(
          "1.2s ease-out",
          keyframes([
            style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }), // Starting from the left
            style({ opacity: 1, transform: "translateX(0)", offset: 1 }), // Ending at the center
          ])
        ),
      ]),
    ]),

    trigger("fadeInPastFromLeft", [
      transition(":enter", [
        animate(
          "1.5s ease-out",
          keyframes([
            style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }), // Starting from the left
            style({ opacity: 1, transform: "translateX(0)", offset: 1 }), // Ending at the center
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnChanges {
  menu_box1 = `/assets/images/1_beginning/box1.png`;
  menu_box2 = `/assets/images/1_beginning/box2.png`;
  menu_box3 = `/assets/images/1_beginning/box3.png`;

  future = `/assets/images/1_beginning/future.png`;
  present = `/assets/images/1_beginning/present.png`;
  past = `/assets/images/1_beginning/past.png`;
  currentSection = 0;
  isPortraitMode: boolean = false;
  currentUrl: string = "";
  constructor(private router: Router, private route: ActivatedRoute) {
    this.checkOrientation();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }
  ngOnInit() {
    this.currentUrl = this.router.url;  
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
      const index = this.getIndexOrFallback(this.currentUrl);
      this.currentSection = index;
    });
  }
  getIndexOrFallback(path: string): number {
    // Try to find the index in `sectionScroll`
    let index = sectionScroll.indexOf(path);

    // If the index is negative, try to find it in `sections`
    if (index === -1) {
      index = sections.indexOf(path);
    }

    return index; // Returns the index, or -1 if not found in both arrays
  }
  // Listen to the scroll event
  @HostListener("window:wheel", ["$event"])
  onScroll(event: WheelEvent) {
    // Only navigate between sections if not inside MainStoryComponent
    const currentUrl = this.router.url;
    const isInsideMainStory = currentUrl.includes("/main"); 

    if (isInsideMainStory ) {
      return; // Don't trigger navigation inside the MainStoryComponent
    }

    if (event.deltaY > 0) {
      // Scrolling down
      this.currentSection = Math.min(
        this.currentSection + 1,
        sections.length - 1
      );
    } else {
      // Scrolling up
      this.currentSection = Math.max(this.currentSection - 1, 0);
    }

    // Navigate based on the current section, preserving the query parameters
    this.navigateToSection();
  }

  // Helper function to handle the actual navigation
  navigateToSection() {
    const url = sections[this.currentSection]; 
    if (url.includes("subScreen")) {
      const subScreen = url.split("'")[1]; // Extract the subScreen value
      this.router.navigate(["/opening"], { queryParams: { subScreen } });
    } else if (url.includes("subLab")) {
      const subLab = url.split("'")[1]; // Extract the subLab value
      this.router.navigate(["/lab"], { queryParams: { subLab } });
    } else if (url.includes("subAI")) {
      const subAI = url.split("'")[1]; // Extract the subAI value
      this.router.navigate(["/ai-screen"], { queryParams: { subAI } });
    } else {
      this.router.navigate([url]);
    }
  }

  // Listen to orientation changes
  @HostListener("window:resize", ["$event"])
  onResize(event: any): void {
    this.checkOrientation();
  }

  // Check if the device is in portrait mode
  checkOrientation(): void {
    if (window.innerHeight > window.innerWidth) {
      this.isPortraitMode = true; // Portrait mode
    } else {
      this.isPortraitMode = false; // Landscape mode
    }
  }

  goToNextPage() {
    // If we're not at the end of the sections, increment the index
    if (this.currentSection < sections.length - 1) {
      this.currentSection++;
      this.router.navigateByUrl(sectionScroll[this.currentSection]); 
    }
  }
}
