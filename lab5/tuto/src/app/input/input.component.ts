import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() outEnterName = new EventEmitter<string>();
  @Output() outEnter = new EventEmitter<string>();

  outName(name: HTMLInputElement){
    this.outEnter.emit(name.value)
  }

  constructor() {}
  ngOnInit(): void {}
  enterName(nameInput: HTMLInputElement) {
    this.outEnterName.emit(nameInput.value);
  }

}
