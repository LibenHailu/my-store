import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css'],
})
export class CheckOutFormComponent {
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  @Output() onCheckout: EventEmitter<string> = new EventEmitter();
  onSubmit() {
    this.onCheckout.emit(this.fullName);
  }
}
