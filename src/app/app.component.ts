import { Component } from '@angular/core'

@Component({
  selector: 'rcapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.css']
})

export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294266565384,
    isFavorite: false
  };

  OnMediaItemDelete(mediaItem) {

  }
}
