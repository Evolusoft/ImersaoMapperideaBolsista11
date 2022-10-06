import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-list-tutorial',
  templateUrl: './list-tutorial.component.html',
  styleUrls: ['./list-tutorial.component.css']
})
export class ListTutorialComponent implements OnInit {

  tutorialCollection?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  debug = true;
  title = ;
  description = ;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutoriais();
  }

  retrieveTutoriais(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorialCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutoriais();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutoriais(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorialCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchDescription(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByDescription(this.description)
      .subscribe(
        data => {
          this.tutorialCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
