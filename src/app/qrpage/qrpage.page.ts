import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-qrpage',
  templateUrl: './qrpage.page.html',
  styleUrls: ['./qrpage.page.scss'],
})
export class QrpagePage implements OnInit {

  id: any;
  nombre: any;
  sigla: any;

  qrCodeString= 'docente Diego Cares; sigla' ;

  constructor(private activerouter: ActivatedRoute, private router: Router) { 
    this.activerouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.sigla = this.router.getCurrentNavigation()?.extras.state?.['sigla']
      }
    })
  }

  ngOnInit() {
  }

}
