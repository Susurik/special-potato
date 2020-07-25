import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {

  date:Date;

  constructor() {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }

  ngOnInit(): void {
  }

}
