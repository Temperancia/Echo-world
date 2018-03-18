import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ng2EmojiService } from 'ng2-emoji';

@Component({
  selector: 'app-emojis',
  templateUrl: 'emojis.component.pug',
  styles: []
})
export class EmojisComponent implements OnInit {
  public visible = false;
  emojis: Array<string>;
  actualEmojis: Array<string>;
  @Output() onEmoji = new EventEmitter<string>();
  constructor() {
    this.emojis = this.actualEmojis = Ng2EmojiService.emojis;
    for (let emoji = 0; emoji < this.emojis.length; emoji++) {
      this.actualEmojis[emoji] = ':' + this.emojis[emoji] + ':';
    }
  }

  ngOnInit() {
  }
  public show(): void {
    if (this.visible) {
      this.hide();
    } else {
      this.visible = true;
    } 
   
  }

  public hide(): void {
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
  private addEmoji(emoji): void {
    console.log("emit");
    this.onEmoji.emit(emoji);
  }
}
