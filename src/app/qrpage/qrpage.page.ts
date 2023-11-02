import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qrpage',
  templateUrl: './qrpage.page.html',
  styleUrls: ['./qrpage.page.scss'],
})
export class QrpagePage implements OnInit {

  qrCodeString= 'this is a secret qr code message';

  constructor() { }

  ngOnInit() {
  }

}
