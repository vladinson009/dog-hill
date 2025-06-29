import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, MatButton],

  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {}
