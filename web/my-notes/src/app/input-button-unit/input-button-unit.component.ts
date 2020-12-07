import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `

  <textarea class="the-note-input"
         #TheNote
         [value] ="title"
         >Input Your Note</textarea>

  <button class="btn"
          (click)="submitValue(TheNote.value); TheNote.value =''">
    Save
  </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submitItem: EventEmitter<string> = new EventEmitter();

  title = 'Input something..';



  constructor() {}

  ngOnInit() {}


  submitValue(newTitle: string) {
    if (newTitle) {
      this.submitItem.emit(newTitle);
    } else {
      alert('Value cannot be empty');
    }
  }

}
