import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.scss']
})
export class ShopSingleComponent implements OnInit {

  id: string | null = '';
  product = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = "product id is" + this.id;
  }

  ngOnInit(): void {

  }

}
