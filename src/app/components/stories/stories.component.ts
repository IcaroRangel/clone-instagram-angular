import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent {
  public slides = [
    { img: 'https://picsum.photos/id/18/56/56', user: 'Usuário 1' },
    { img: 'https://picsum.photos/id/22/56/56', user: 'Usuário 2' },
    { img: 'https://picsum.photos/id/39/56/56', user: 'Usuário 3' },
    { img: 'https://picsum.photos/id/41/56/56', user: 'Usuário 4' },
    { img: 'https://picsum.photos/id/57/56/56', user: 'Usuário 5' },
    { img: 'https://picsum.photos/id/91/56/56', user: 'Usuário 6' },
    { img: 'https://picsum.photos/id/107/56/56', user: 'Usuário 7' },
    { img: 'https://picsum.photos/id/295/56/56', user: 'Usuário 8' },
    { img: 'https://picsum.photos/id/299/56/56', user: 'Usuário 9' },
    { img: 'https://picsum.photos/id/301/56/56', user: 'Usuário 10' },
    { img: 'https://picsum.photos/id/340/56/56', user: 'Usuário 11' },
    { img: 'https://picsum.photos/id/378/56/56', user: 'Usuário 12' },
  ];

  public slideConfig = {
    slidesToShow: 7,
    slidesToScroll: 3,
  };
}
