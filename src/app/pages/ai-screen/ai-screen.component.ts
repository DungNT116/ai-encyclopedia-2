import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-ai-screen",
  standalone: true,
  imports: [],
  templateUrl: "./ai-screen.component.html",
  styleUrl: "./ai-screen.component.scss",
})
export class AiScreenComponent {
  currentSubScreen: string | null = "";
  isHovered = false;
  visibleEliza = false;
  visibleDeepBlue = false;
  visibleMoore = false;
  visibleBigData = false;
  visibleBigData2 = false;
  visibleSuccess = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capture the query parameter 'subLab'
    this.route.queryParamMap.subscribe(
      (params: { get: (arg0: string) => string | null }) => {
        this.currentSubScreen = params.get("subAI");
        this.scrollToSubScreen();
      }
    );
  }
  // Method to scroll to the correct subsection based on the 'subScreen' parameter
  scrollToSubScreen(): void {
    if (this.currentSubScreen) {
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
  
  navigateEliza(): void {
    // Open a new window or tab
    window.open('https://web.njit.edu/~ronkowit/eliza.html', '_blank');
  }
  navigateDeepBlue(){
    
    // Open a new window or tab
    window.open('https://lichess.org/', '_blank');
  }
}
