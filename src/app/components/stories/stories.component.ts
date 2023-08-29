import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent {
  public slides = [
    { img: 'https://picsum.photos/id/18/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/22/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/39/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/41/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/57/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/91/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/107/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/295/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/299/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/301/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/340/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/378/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/400/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/39/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/453/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/471/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/498/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/511/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/524/56/56', user: 'Usuário' },
    { img: 'https://picsum.photos/id/567/56/56', user: 'Usuário' },
  ];

  public slideConfig = { slidesToShow: 7, slidesToScroll: 2 };
}
