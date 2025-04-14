import { Pipe, PipeTransform } from '@angular/core';
import { ConfirmationToken } from '@stripe/stripe-js';
import { PaymentSummary } from '../models/order';

@Pipe({
  name: 'paymentCard',
})
export class PaymentCardPipe implements PipeTransform {
  transform(
    value?: ConfirmationToken['payment_method_preview'] | PaymentSummary,
    ...args: unknown[]
  ): unknown {
    if (value && 'card' in value) {
      const { brand, last4, exp_month, exp_year } = (
        value as ConfirmationToken['payment_method_preview']
      ).card!;
      const formattedMonth = exp_month.toString().padStart(2, '0');
      return `${brand.toUpperCase()} **** **** **** ${last4}, Exp: ${formattedMonth}/${exp_year}`;
    } else if (value && 'last4' in value) {
      const { brand, last4, expMonth, expYear } = value as PaymentSummary;
      const formattedMonth = expMonth.toString().padStart(2, '0');
      return `${brand.toUpperCase()} **** **** **** ${last4}, Exp: ${formattedMonth}/${expYear}`;
    }
    return 'Unknown payment method';
  }
}
