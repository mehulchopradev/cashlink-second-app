import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sep'
})
export class SepPipe implements PipeTransform {

  transform(values: number[], ...args: string[]): string {
    const sep: string = args[0];
    return values.join(sep || '$');
  }

}
