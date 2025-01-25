import { Component } from '@angular/core'; 
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInFromLeft', [
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }), // Starting from the left
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),     // Ending at the center
        ]))
      ])
    ]),

    trigger('fadeInPresentFromLeft', [
      transition(':enter', [
        animate('1.2s ease-out', keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }), // Starting from the left
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),     // Ending at the center
        ]))
      ])
    ]),

    trigger('fadeInPastFromLeft', [
      transition(':enter', [
        animate('1.5s ease-out', keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }), // Starting from the left
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),     // Ending at the center
        ]))
      ])
    ]),
    trigger('fadeInFromRight', [
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),   // Start off-screen right
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })       // Move to center
        ]))
      ])
    ]),
    trigger('fadeInCharFromRight', [
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ opacity: 0, transform: 'translateX(150%)', offset: 0 }),   // Start off-screen right
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })       // Move to center
        ]))
      ])
    ]),
    trigger('fadeInFromTop', [
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ opacity: 0, transform: 'translateY(-200%)', offset: 0 }),   // Start off-screen right
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })       // Move to center
        ]))
      ])
    ])
  ]
})
export class HomeComponent {
  garage = `/assets/images/1_beginning/garage.png`;
  bedroom = `/assets/images/1_beginning/bedroom.png`;
  centerline = `/assets/images/1_beginning/centerline.png`;
  arrowCenterLine = [
    `/assets/images/1_beginning/arrow1.png`,
    `/assets/images/1_beginning/arrow2.png`,
    `/assets/images/1_beginning/arrow3.png`
  ]
  char = `/assets/images/1_beginning/char.png`;
  text_ai = '/assets/images/1_beginning/ai.png';
  text_encyclopedia = '/assets/images/1_beginning/encyclopedia.png';

  menu_box1 = `/assets/images/1_beginning/box1.png`;
  menu_box2 = `/assets/images/1_beginning/box2.png`;
  menu_box3 = `/assets/images/1_beginning/box3.png`;

  future = `/assets/images/1_beginning/future.png`;
  present = `/assets/images/1_beginning/present.png`;
  past = `/assets/images/1_beginning/past.png`;
}
