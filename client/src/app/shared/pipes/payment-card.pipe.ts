import { Pipe, PipeTransform } from '@angular/core';
import { ConfirmationToken } from '@stripe/stripe-js';

@Pipe({
  name: 'paymentCard',
})
export class PaymentCardPipe implements PipeTransform {
  transform(
    value?: ConfirmationToken['payment_method_preview'],
    ...args: unknown[]
  ): unknown {
    if (value?.card) {
      const { brand, last4, exp_month, exp_year } = value.card;
      const formattedMonth = exp_month.toString().padStart(2, '0');
      return `${brand.toUpperCase()} **** **** **** ${last4}, Exp: ${formattedMonth}/${exp_year}`;
    }
    return 'Unknown payment method';
  }
}
