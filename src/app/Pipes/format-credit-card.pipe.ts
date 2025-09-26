import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCreditCard'
})
export class FormatCreditCardPipe implements PipeTransform {

  transform(value: string): string {
    
    if(!value) return "";
        return value.match(/.{1,4}/g)?.join('-') ?? value;
  }

}
