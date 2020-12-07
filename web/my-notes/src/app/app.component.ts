import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { TheNote } from './interfaces/the-note';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="app-title">
  There Is Your {{ title }}!
  </h1>
  <app-list-manager></app-list-manager>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'Notes';

}

