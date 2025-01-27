import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./main-story.component.html",
  styleUrl: "./main-story.component.scss",
})
export class MainStoryComponent {
  // Array to store visibility status of images
  imageVisibility: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  visibleDescartes = false;
  visibleLeibniz = false;
  visibleDetailDescartes = false;
  visibleDetailLeibniz = false;
  constructor(private router: Router) {}
  @HostListener("document:wheel", ["$event"])
  onDocumentMousewheelEvent(event: Event) {
    this.updateImageVisibility();
  }

  updateImageVisibility(): void {
    const images = document.querySelectorAll(".content img");
    const windowHeight = window.innerHeight;
    console.log(windowHeight)
    images.forEach((image, index) => {
      const rect = image.getBoundingClientRect();
      switch (index) {
        case 1:
        case 6:
        case 7:
          if (rect.top * 0.6 <= windowHeight) {
            this.imageVisibility[index] = true;
          } else {
            this.imageVisibility[index] = false;
          }
          break;
        case 2:
        case 3:
        case 4:
          if (rect.top * 0.7 <= windowHeight) {
            this.imageVisibility[index] = true;
          } else {
            this.imageVisibility[index] = false;
          }
          break;

        case 5:
          if (rect.top * 0.9 <= windowHeight) {
            this.imageVisibility[index] = true;
          } else {
            this.imageVisibility[index] = false;
          }
          break;
      }
    });
  }

  isImageVisible(index: number): boolean {
    return this.imageVisibility[index];
  }
  showDescartes() {
    return (this.visibleDescartes = true);
  }
  showLeibniz() {
    return (this.visibleLeibniz = true);
  }
  showDetailDescartes() {
    return (this.visibleDetailDescartes = true);
  }
  hideDetailDescartes() {
    return (this.visibleDetailDescartes = false);
  }

  showDetailLeibniz() {
    return (this.visibleDetailLeibniz = true);
  }
  hideDetailLeibniz() {
    return (this.visibleDetailLeibniz = false);
  }
  goBackToPrevious() {
    return this.router.navigateByUrl("/opening?subScreen=6");
  }
}
