import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two-component',
  templateUrl: './super-saiyan-two-component.component.html',
  styleUrls: ['./super-saiyan-two-component.component.css']
})
export class SuperSaiyanTwoComponentComponent implements OnInit {
  @Input() bpl;

  constructor() { }

  ngOnInit() {
  }

}
