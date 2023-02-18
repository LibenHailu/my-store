import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  fullName: string = '';
  totalPrice: string = '0';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.fullName = params.get('fullName') as string;
      this.totalPrice = params.get('totalPrice') as string;
    });
  }
}
