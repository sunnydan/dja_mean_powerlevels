import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human-component',
  templateUrl: './human-component.component.html',
  styleUrls: ['./human-component.component.css', './../app.component.css']
})
export class HumanComponentComponent implements OnInit {
  @Input() bpl;

  constructor() { }

  ngOnInit() {
  }

}
