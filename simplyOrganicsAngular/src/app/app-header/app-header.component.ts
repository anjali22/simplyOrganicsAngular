import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app-header.component.css', 
              '../../assets/css/ecommerce/main_styles.css',
            '../../assets/css/ecommerce/responsive.css'
          ]
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
