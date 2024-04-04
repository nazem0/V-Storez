import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderService } from './services/app-services/loader.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'V-Store';
  constructor(private router: Router, private loader: LoaderService) {
    this.initRouterLoader();
  }
  initRouterLoader() {
    this.router.events.subscribe(console.log)
    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationStart)
          this.loader.startLoading()
        else if (event instanceof NavigationEnd)
          this.loader.stopLoading()
      }
    })
  }
}
