import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ImageEditorComponent } from '../image-editor/image-editor.component';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss'],
})
export class SelectImageComponent implements OnInit {
  imageFiles: any[] = [];
  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        let imageFile = {
          imageFile: file,
          imageDataURL: reader.result,
        };
        this.imageFiles.push(imageFile);
      };
    }
  }

  createModal(fileIndex: number) {
    let imageFile = this.imageFiles[fileIndex].imageFile;
    const modal = this.modalService.create({
      nzContent: ImageEditorComponent,
      nzClassName: 'image-editor',
      nzWidth: '1050px',
      nzCentered: true,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {
        'background-color': '#1e1e1e',
      },
      nzComponentParams: {
        imageFile: imageFile,
      },
      nzOkText: 'Save Changes',
      nzCancelText: 'Close without saving',
    });

    modal.afterClose.subscribe((res: any) => {
      if (res != undefined) {
        this.imageFiles[fileIndex].imageDataURL = res;
      }
    });
  }

  removeFile(index: number) {
    this.imageFiles.splice(index, 1);
  }
}
