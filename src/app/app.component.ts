import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bai1Component } from "./bai1/bai1.component";
import { Bai2Component } from './bai2/bai2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Bai1Component, Bai2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab6';
}
