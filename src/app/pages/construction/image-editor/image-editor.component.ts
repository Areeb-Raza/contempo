import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import ImageEditor from 'tui-image-editor';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: [
    '../../../../../node_modules/tui-image-editor/dist/tui-image-editor.min.css',
    './image-editor.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ImageEditorComponent implements AfterViewInit {
  tuiImageEditor!: ImageEditor;
  @Input() imageFile!: File;
  @ViewChild('editor') private editor!: ElementRef;

  constructor(private modal: NzModalRef) {}

  ngAfterViewInit() {
    this.tuiImageEditor = new ImageEditor(this.editor.nativeElement, {
      cssMaxWidth: 1000, // Component default value: 1000
      cssMaxHeight: 800,
      includeUI: {
        // uiSize: {
        //   width: '1000px',
        //   height: '700px',
        // },
      },
    });
    // this.tuiImageEditor
    //   .loadImageFromURL('assets/logo.png', 'My example picture')
    //   .then(() => {
    //     // @ts-ignore
    //     this.tuiImageEditor.ui.activeMenuEvent();
    //     this.tuiImageEditor.addText('init text');
    // });

    this.tuiImageEditor.loadImageFromFile(this.imageFile, '').then(() => {
      // @ts-ignore
      this.tuiImageEditor.ui.activeMenuEvent();
    });
  }

  closeModal = (type: string) => {
    if (type == 'save') {
      const imageURL = this.tuiImageEditor.toDataURL();
      // console.log(imageURL);
      this.modal.close(imageURL);
    } else {
      this.modal.close();
    }
  };
}
