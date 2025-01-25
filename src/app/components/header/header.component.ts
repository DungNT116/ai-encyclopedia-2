import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  menu = `/assets/images/general_icons/home.png`;
  volumes = [
    `/assets/images/general_icons/volume-up.png`,
    `/assets/images/general_icons/volume-up_1.png`,
    `/assets/images/general_icons/volume-up_2.png`,
    `/assets/images/general_icons/volume-up_3.png`,
  ]; 
  currentVolumeIndex: number = 0;

  constructor(private router: Router){

  }
  // Function to change to the next volume image
  nextVolume() {
    // Increment index and reset to 0 if it exceeds the length
    this.currentVolumeIndex = (this.currentVolumeIndex + 1) % this.volumes.length;
  }

  // Function to get the current volume icon
  getCurrentVolumeIcon(): string {
    return this.volumes[this.currentVolumeIndex];
  }


  abouts = [
    `/assets/images/general_icons/about_filled.png`,
    `/assets/images/general_icons/about_transparent.png`,
  ];
  currentAbout: string = this.abouts[0]; // Set the default image

  // Function to change the image on hover
  onMouseEnter() {
    this.currentAbout = this.abouts[1];  // Switch to the hover image
  }

  // Function to revert the image when hover is removed
  onMouseLeave() {
    this.currentAbout = this.abouts[0];  // Revert to the original image
  }
  goHome(){ 
    return this.router.navigateByUrl("/");
  } 
}
