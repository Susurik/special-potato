import { NewsService } from './news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data: any; //izveidojam variable ar any data type

  constructor(private newsService: NewsService) { }

  ngOnInit(): void { //
    this.newsService.getData('top-headlines?country=au&category=business')
    .subscribe(data => {
    console.log(data);
    this.data = data; //pielidzinam data no this funkcijas uz izveidoto funkciju ar any data type
    });
  }

}
