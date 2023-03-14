import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
declare var require: any;
const bootstrap = require('src/assets/js/bootstrap.bundle.min.js');
const custom = require('src/assets/js/custom.js');
const jquery = require('src/assets/js/jquery-1.11.0.min.js');
const jquerymigrate = require('src/assets/js/jquery-migrate-1.2.1.min.js');
// const slick = require('src/assets/js/slick.min.js');
const templatemo = require('src/assets/js/templatemo.js');
const templatemomin = require('src/assets/js/templatemo.min.js');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));