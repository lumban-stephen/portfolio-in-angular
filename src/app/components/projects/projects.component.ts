// projects.component.ts
import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {

  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
