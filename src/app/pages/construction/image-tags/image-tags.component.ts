import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-tags',
  templateUrl: './image-tags.component.html',
  styleUrls: ['./image-tags.component.scss'],
})
export class ImageTagsComponent implements OnInit {
  tags = ['Kitchen', 'Bathroom'];
  inputVisible = false;
  inputValue = '';
  tagColors = [
    'blue',
    'green',
    'magenta',
    'geekblue',
    'orange',
    'cyan',
    'red',
    'volcano',
    'purple',
  ];
  @Output() selectedTags: EventEmitter<any> = new EventEmitter<Array<String>>();
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  ngOnInit(): void {
    this.selectedTags.emit(this.tags);
  }
  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter((tag) => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
      this.selectedTags.emit(this.tags);
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
}
