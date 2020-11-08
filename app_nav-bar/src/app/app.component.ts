import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'ng8-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentActiveApp = -1;
  public appUrls: Array<string> = [
    '#/app1',
    '#/app3'
  ];

  public constructor(private zone: NgZone) { }

  public ngOnInit(): void {
    this.checkUrlState();
  }

  public appSwitch(index: number): void {
    this.zone.run(() => { location.href = this.appUrls[index]; });
    this.currentActiveApp = index;
  }

  private checkUrlState() {
    const hashValue = location.hash;
    const isAnyViewActiove = this.appUrls.findIndex(e => e === hashValue);

    if (isAnyViewActiove > -1) {
      this.currentActiveApp = isAnyViewActiove;
    }
  }
}
