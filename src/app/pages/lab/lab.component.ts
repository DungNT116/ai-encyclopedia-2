import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ImageSequencePlayerComponent } from "../image-sequence-player/image-sequence-player.component";

@Component({
  selector: "app-lab",
  standalone: true,
  imports: [ImageSequencePlayerComponent],
  templateUrl: "./lab.component.html",
  styleUrl: "./lab.component.scss",
})
export class LabComponent {
  currentSubScreen: string | null = "";

  visibleNotebook = false;
  visibleDetailAlan = false;
  visibleTuringTest = false;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Capture the query parameter 'subLab'
    this.route.queryParamMap.subscribe(
      (params: { get: (arg0: string) => string | null }) => {
        this.currentSubScreen = params.get("subLab");
        this.scrollToSubScreen();
      }
    );
  }
  // Method to scroll to the correct subsection based on the 'subScreen' parameter
  scrollToSubScreen(): void {
    this.visibleNotebook = false;
    if (this.currentSubScreen) {
      console.log("currentSubScreen :: ", this.currentSubScreen)
      if(this.currentSubScreen === '2'){
        setTimeout(() => {
          this.visibleNotebook = true;
        },500)
      }
      const element = document.getElementById(this.currentSubScreen); // Assuming IDs match subScreen values
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
 
  goToSublab2() {
    return this.router.navigateByUrl("/lab?subLab=2");
  }
 
  navigateTuring(): void {
    // Open a new window or tab
    window.open('https://www.newscientist.com/article/2043311-visual-turing-test/', '_blank');
  }
}
