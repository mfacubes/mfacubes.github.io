import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  open = signal(false)


  @ViewChild("services") services!: ElementRef<HTMLElement>;
  @ViewChild("profiles") profiles!: ElementRef<HTMLElement>;
  @ViewChild("contact") contact!: ElementRef<HTMLElement>;
  @ViewChild("social") social!: ElementRef<HTMLElement>;
  private observer: IntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Load your component here
        const { target } = entry
        if (!target.classList.contains("left-to-right")) target.classList.toggle("left-to-right", true)
        // You can call a function to load your component
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1
  });



  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {



    this.observer.observe(this.services.nativeElement)
    this.observer.observe(this.profiles.nativeElement)
    this.observer.observe(this.contact.nativeElement)
    this.observer.observe(this.social.nativeElement)
  }

  toggleMenu() {
    this.open.update(v => !v)
  }

  scrolltoView(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    this.open.set(false)
  }
}
