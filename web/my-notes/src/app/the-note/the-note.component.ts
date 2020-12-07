import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TheNote } from '../interfaces/the-note';

@Component({
  selector: 'app-the-note',
  template: `
  <div class="the-note">
    {{item.title}}


    <button class="btn" (click)="editItem()">
      edit
    </button>
    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>

  </div>
  `,
  styleUrls: ['./the-note.component.scss']
})
export class TheNoteComponent implements OnInit {
  @Input() item: TheNote;
  @Output() remove: EventEmitter<TheNote> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editItem() {
    this.update.emit({
      item: this.item

    });
  }
  removeItem() {
    this.remove.emit(this.item);
  }


}
