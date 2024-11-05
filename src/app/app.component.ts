import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-portfolio';

  @ViewChild('snapContainer', { static: true }) snapContainer!: ElementRef;

  private scrollTimeout: any;

  ngAfterViewInit() {
    this.addSmoothScroll();
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  addSmoothScroll() {
    const container = this.snapContainer.nativeElement;

    // Listen for wheel events to override default behavior
    container.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scroll behavior

      // Divide deltaY by 2 (or a suitable factor) to adjust scroll sensitivity
      const scrollIncrement = event.deltaY / 100; // Adjust '2' as needed for sensitivity

      container.scrollBy({
        top: scrollIncrement,
        behavior: 'smooth'
      });

      // Add delay before snapping to the closest section
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.smoothScrollToClosestSection();
      }, 150); // Adjust delay if needed
    }, { passive: false });
  }

  smoothScrollToClosestSection() {
    const container = this.snapContainer.nativeElement;
    const sections: HTMLElement[] = Array.from(container.children) as HTMLElement[];
    const scrollTop = container.scrollTop;
    let closestSection: HTMLElement = sections[0];

    // Find the closest section to snap to
    sections.forEach((section: HTMLElement) => {
      if (Math.abs(section.offsetTop - scrollTop) < Math.abs(closestSection.offsetTop - scrollTop)) {
        closestSection = section;
      }
    });

    // Smoothly scroll to the closest section
    container.scrollTo({
      top: closestSection.offsetTop,
      behavior: 'smooth'
    });
  }
}
