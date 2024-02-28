import { Component } from '@angular/core';
import { Student } from './student.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  students: Student[];
  constructor(){
    this.students = this.getStudents()
  }
  getStudents(){
    return [
      {id: 1, name: "Ivan"},
      {id: 2, name: "Bill"},
      {id: 3, name: "John"},
      {id: 4, name: "Petr"},
    ]
  }
  addName(name: string){
    this.students.push({
      name: name,
      id: this.students.length + 1
    })
  }
  deleteName(name: string){
    delete this.students[this.students.findIndex(e => e.name == name)]
  }
}
