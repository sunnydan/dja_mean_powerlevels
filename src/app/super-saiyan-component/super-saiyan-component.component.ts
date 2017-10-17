import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component',
  templateUrl: './super-saiyan-component.component.html',
  styleUrls: ['./super-saiyan-component.component.css', './../app.component.css']
})
export class SuperSaiyanComponentComponent implements OnInit {
  @Input() bpl;

  constructor() { }

  ngOnInit() {
  }

}
