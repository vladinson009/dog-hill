import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { trigger, style, animate, transition } from '@angular/animations';
export interface TestimonialType {
  name: string;
  message: string;
  imageUrl?: string;
  role?: string;
}
@Component({
  selector: 'app-testimonial',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class Testimonial implements OnInit, OnDestroy {
  private intervalId: null | number = null;
  public activeIndex = 0;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    }, 10000);
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  public testimonials: TestimonialType[] = [
    {
      name: 'Jane Doe',
      message:
        ' This pet shop cha c ch lent service! This pet shop changed my life. Excellellent service! This pet shop changed my life. Excellellent service! This pet shop changed my life. Excellellent service! This pet shop changed my life. Excellellent service! This pet sho life. Excellellent service! This pet sho life. Excellellent service! This pet sho life. Excellellent service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This pet sho life. Excellellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service!',
      imageUrl:
        'https://images.unsplash.com/photo-1599460093135-f881f382fc26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJveGVyJTIwZG9nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
      role: 'Pet Owner',
    },
    {
      name: 'John Smith',
      message: 'Very professional and caring staff. Highly recommend!',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1718652842683-8e7f623fbc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJveGVyJTIwZG9nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
      role: 'Dog Trainer',
    },
    {
      name: 'Jane Doe',
      message:
        ' This pet shop cha c ch lent service! This pet shop changed my life. Excellellent service! This pet shop changed my life. Excellellent service! This pet shop changed my life. Excellellent service! This pet shop changed my life. Excellellent service! This pet sho life. Excellellent service! This pet sho life. Excellellent service! This pet sho life. Excellellent service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This petnt service! This pet sho life. Excellellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service! This pet shop changed my life. Excellent service!',
      imageUrl:
        'https://images.unsplash.com/photo-1599460093135-f881f382fc26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJveGVyJTIwZG9nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
      role: 'Pet Owner',
    },
    {
      name: 'John Smith',
      message: 'Very professional and caring staff. Highly recommend!',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1718652842683-8e7f623fbc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJveGVyJTIwZG9nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
      role: 'Dog Trainer',
    },
  ];

  public next() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }
  public prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
  public setActive(index: number) {
    this.activeIndex = index;
  }
}
