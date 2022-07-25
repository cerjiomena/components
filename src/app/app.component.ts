import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';

  posts = [
    {
      img:'',
      author:'John',
      title:'Title #1'
    },
    {
      img:'',
      author:'Mike',
      title:'Title #2'
    },
    {
      img:'',
      author:'Jane',
      title:'Title #3'
    }
  ]
}
