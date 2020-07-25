import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  stackoverflowUrl: string = 'https://stackoverflow.com/';
  linkedinUrl: string = 'https://www.linkedin.com/';
  facebookUrl:string = 'https://www.facebook.com/';
  twitterUrl:string = 'https://twitter.com/';
  githubUrl:string = 'https://github.com/';
  googleUrl:string = 'https://plus.google.com/';

  constructor() { }

  ngOnInit(): void {
  }

}
