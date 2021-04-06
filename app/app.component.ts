import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = [1];
  count = 1;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.elements = [...this.elements, ++this.count];
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
}
