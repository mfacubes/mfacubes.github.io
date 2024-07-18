import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  open = signal(false)
  constructor() { }

  toggleMenu() {
    this.open.update(v => !v)
  }

  scrolltoView(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    this.open.set(false)
  }
}
