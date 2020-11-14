import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'rc-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['/media-item.component.css']
})

export class MediaItemComponent {

  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  name = 'The Redemption'

  wasWatched() {
    return true;
  }

  onDelete() {
    console.log("delete");
    alert("CARAJO");
    this.delete.emit(this.mediaItem);
  }
}
