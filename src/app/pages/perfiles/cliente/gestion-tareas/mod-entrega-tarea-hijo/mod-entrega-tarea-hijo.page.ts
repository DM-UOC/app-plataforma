import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-mod-entrega-tarea-hijo',
  templateUrl: './mod-entrega-tarea-hijo.page.html',
  styleUrls: ['./mod-entrega-tarea-hijo.page.scss'],
})
export class ModEntregaTareaHijoPage implements OnInit {

  public fileUploader: FileUploader = new FileUploader({
    queueLimit: 5,
    allowedFileType: ['image', 'video'],
    maxFileSize: 2*1048*1048

  });
  hasBaseDropZoneOver:boolean;
  
  constructor() { }

  ngOnInit() {
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

}
