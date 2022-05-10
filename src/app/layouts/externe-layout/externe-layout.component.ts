import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-externe-layout',
  templateUrl: './externe-layout.component.html',
  styleUrls: ['./externe-layout.component.scss']
})
export class ExterneLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    // var html = document.getElementsByTagName("html")[0];
    // html.classList.add("externe-layout");
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.add("bg-default");
    // this.router.events.subscribe((event) => {
    //   this.isCollapsed = true;
  //  });

  }
  ngOnDestroy() {
    // var html = document.getElementsByTagName("html")[0];
    // html.classList.remove("auth-layout");
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.remove("bg-default");
  }
}
