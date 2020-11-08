import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  public navigateToSubModule(): void {
    // this.router.navigateByUrl('app1' + '/additional-data');
    // this.router.navigate(['#/app1','/additional-data']);
  }
}
