import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four-component',
  templateUrl: './super-saiyan-four-component.component.html',
  styleUrls: ['./super-saiyan-four-component.component.css', './../app.component.css']
})
export class SuperSaiyanFourComponentComponent implements OnInit {
  @Input() bpl;

  constructor() { }

  ngOnInit() {
  }

}
