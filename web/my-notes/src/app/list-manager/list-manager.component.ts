import { Component, OnInit } from '@angular/core';
import {TheNote} from '../interfaces/the-note'
import { MyNotesService } from '../services/my-notes.service';
import {interval, Observable} from 'rxjs';

const newLocal = 'hello';

@Component({
  selector: 'app-list-manager',
  template: `
<div class="notes-app">
  <app-input-button-unit (submitItem)="addItem($event)"></app-input-button-unit>

  <ul *ngIf="Notes | async as TheNote">
    <li *ngFor="let theNote of Notes">
       <app-the-note [item]="theNote"
                     (remove)="removeItem($event)"
                     (update)="updateItem($event.item, $event.changes)"></app-the-note>
    </li>
  </ul>
</div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  Notes: Observable<TheNote[]>;

  constructor(private myNotesService: MyNotesService) {}


  ngOnInit(): void {
    this.Notes = this.myNotesService.getNotes();
  }

  addItem(title: string){
    this.myNotesService.addItem({title});
  }

  removeItem(item) {
    this.myNotesService.deleteItem(item);
  }

  updateItem(item) {
    this.myNotesService.updateItem(item);
  }
}
