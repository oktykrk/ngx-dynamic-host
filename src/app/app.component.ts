import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-host';
}


@Component({
  selector: 'app-qwe',
  template: `

  <h1>Dynamicly loaded</h1>

  `
})
export class QweComponent {
  title = 'dynamic-host';
}
