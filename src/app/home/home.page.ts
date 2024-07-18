import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  open = signal(false)


  
  



  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {



    
  }

  toggleMenu() {
    this.open.update(v => !v)
  }

  scrolltoView(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    this.open.set(false)
  }
}
