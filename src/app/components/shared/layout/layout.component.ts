import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    SpeedDialModule,
  ],
  providers:[MessageService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor() {
  }
}
