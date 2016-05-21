import { Component } from '@angular/core'

export class Student {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <h2>{{student.name}}'s details!</h2>
               <div><label>id: </label>{{student.id}}</div>
               <div>
                <label>name: </label>
                <input [(ngModel)]="student.name" placeholder="name">
               </div>`
})

export class AppComponent {
  title = 'Student List';
  student : Student = {
      id:1,
      name: 'Tommy'
  }
}

