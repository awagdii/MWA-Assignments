import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi3'
})
export class Multi3Pipe implements PipeTransform {

  transform(value: String, args?: any): any {
    return value + ' ' + value + ' ' + value;
  }

}
