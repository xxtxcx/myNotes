import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyNotesService} from './services/my-notes.service';
import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TheNoteComponent } from './the-note/the-note.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TheNoteComponent,
    ListManagerComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
