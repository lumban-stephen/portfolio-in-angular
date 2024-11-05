import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isHovered = false;
  
  toggleVideo(hovered: boolean): void {
    this.isHovered = hovered;
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  smoothScrollTo(sectionId: string, event: Event) {
    event.preventDefault(); // Prevent the default jump behavior

    // Locate the section by ID and scroll to it smoothly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
