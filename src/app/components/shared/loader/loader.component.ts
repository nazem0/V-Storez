import { AsyncPipe, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { Component } from '@angular/core';
import { LoaderService } from '../../../services/app-services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatProgressSpinnerModule],
  template: "<div *ngIf='loader.loading | async' class='loading-container'><div class='loading-bar'><img src='/assets/png/v-logo.png'></div></div>",
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  constructor(public loader:LoaderService){

  }
}
