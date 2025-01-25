import { Component } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { ActivatedRoute } from "@angular/router";
import { ImageSequencePlayerComponent } from "../image-sequence-player/image-sequence-player.component";
@Component({
  selector: "app-opening",
  standalone: true,
  imports: [ImageSequencePlayerComponent],
  templateUrl: "./opening.component.html",
  styleUrl: "./opening.component.scss",
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
    trigger("fadeInFromRight", [
      transition(":enter", [
        animate(
          "1s ease-out",
          keyframes([
            style({ opacity: 0, transform: "translateX(100%)", offset: 0 }), // Start off-screen right
            style({ opacity: 1, transform: "translateX(0)", offset: 1 }), // Move to center
          ])
        ),
      ]),
    ]),
  ],
})
export class OpeningComponent {
  currentSubScreen: string | null = "";

  mainBackground = `/assets/images/2_opening_screen/1/background.png`;
  mainChar = `/assets/images/2_opening_screen/1/mainchar.png`;
  text1 = `/assets/images/2_opening_screen/1/text.png`;
  pic1b = `/assets/images/2_opening_screen/1/1b.png`;
  pic1c = `/assets/images/2_opening_screen/1/1c.png`;
  Classical_Age = `/assets/images/11/BG_Sand.png`;
  Baghdad = `/assets/images/11/Baghdad.png`
  Portal = `/assets/images/11/Portal.png`
  Car = `/assets/images/11/Car.png`
  Popup = `/assets/images/11/Popup.png`
  PopupGif = `/assets/images/11/11a.gif`
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capture the query parameter 'subScreen'
    this.route.queryParamMap.subscribe(
      (params: { get: (arg0: string) => string | null }) => {
        this.currentSubScreen = params.get("subScreen"); 
        this.scrollToSubScreen(); 
      }
    );
  }
  // Method to scroll to the correct subsection based on the 'subScreen' parameter
  scrollToSubScreen(): void {
    if (this.currentSubScreen) {
      console.log(this.currentSubScreen)
      const element = document.getElementById(this.currentSubScreen); // Assuming IDs match subScreen values
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  videoFinished = false;

  onVideoEnd() { 
    this.videoFinished = true;
  }
}
