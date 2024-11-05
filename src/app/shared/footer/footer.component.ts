import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  tooltipMessage1 = 'Click to copy email';
  tooltipMessage2 = 'Click to copy email';

  copyEmail(email: string, tooltip: any) {
    navigator.clipboard.writeText(email).then(() => {
      if (email === 'lumbanstephen@gmail.com') {
        this.tooltipMessage1 = 'Copied!';
        tooltip.show();
        setTimeout(() => {
          this.tooltipMessage1 = 'Click to copy email';
        }, 5000);
      } else {
        this.tooltipMessage2 = 'Copied!';
        tooltip.show();
        setTimeout(() => {
          this.tooltipMessage2 = 'Click to copy email';
        }, 5000);
      }
    });
  }
}
