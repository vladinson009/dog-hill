import { Component } from '@angular/core';
import { Testimonial } from '../../core/testimonial/testimonial';

@Component({
  selector: 'app-hero',
  imports: [Testimonial],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
