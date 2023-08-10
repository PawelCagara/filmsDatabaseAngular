import { Component } from '@angular/core';
import { Film, CreatedFilmsService } from '../film';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent {
  film!: Film | undefined;
  id!: number;

  constructor(
    public createdFilmsService: CreatedFilmsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = this.createdFilmsService
      .getFilms()
      .find((el) => el.id === this.id);
  }

  delete() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.createdFilmsService.removeFilm(this.id); 
  }
  update() {
    
  }
}
