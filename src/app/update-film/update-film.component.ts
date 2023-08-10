import { Component } from '@angular/core';
import { CreatedFilmsService, Film } from '../film';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent {
  film!: Film | undefined;
  id!: number;

  constructor(
    public createdFilmsService: CreatedFilmsService,
    private route: ActivatedRoute,
    private fb: FormBuilder    
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = this.createdFilmsService
      .getFilms()
      .find((el) => el.id === this.id);
  }

  userForm = this.fb.group({
    title: [
      '',      
    ],
    year: [
      '',      
    ],
    director: ['', ],
    stars: ['', ],
    review: ['', ],
  });

  submit(event: Event) {
    this.createdFilmsService.updateFilm(this.id, new Film(
        this.id,
        this.userForm.controls.title.value,
        this.userForm.controls.year.value,
        this.userForm.controls.director.value,
        this.userForm.controls.stars.value,
        this.userForm.controls.review.value
      )
    );
    
  }

}
