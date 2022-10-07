import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-details-tutorial',
  templateUrl: './details-tutorial.component.html',
  styleUrls: ['./details-tutorial.component.css']
})
export class DetailsTutorialComponent implements OnInit {

  tutorial: Tutorial = {
    title:'' ,
    description:'' ,
    published: 
  };
  message = '';
  debug = true;


  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.params.id);
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.tutorial = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
    };

    this.message = '';

    this.tutorialService.update(this.tutorial.id, data)
      .subscribe(
        response => {
          this.tutorial.published = status;
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'O published foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.tutorial.id, this.tutorial)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade TutorialEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.tutorial.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/tutoriais']);
        },
        error => {
          console.log(error);
        });
  }
}
