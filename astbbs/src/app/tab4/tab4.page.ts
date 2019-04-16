import { Component, OnInit, ViewChild } from '@angular/core';
// import { IonInfiniteScroll } from '@ionic/angular';
import { Tab4Service } from './tab4.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private tab4Service: Tab4Service) { }
  // constructor() { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.tab4Service.getHeroes();
  }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }
}
