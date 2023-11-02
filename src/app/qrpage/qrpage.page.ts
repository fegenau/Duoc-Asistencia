import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-qrpage',
  templateUrl: './qrpage.page.html',
  styleUrls: ['./qrpage.page.scss'],
})
export class QrpagePage implements OnInit {

  nombre: any;
  apellido: any;

  qrCodeString= 'this is a secret qr code message';

  constructor(private activerouter: ActivatedRoute, private router: Router) { 
    this.activerouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.apellido = this.router.getCurrentNavigation()?.extras.state?.['apellidop']
      }
    })
  }

  ngOnInit() {
  }

}
