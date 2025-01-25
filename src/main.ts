import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HomeComponent } from './app/home/home.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
