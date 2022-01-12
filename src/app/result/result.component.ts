import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data.question)
  }

}
