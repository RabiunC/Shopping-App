import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, args: any = '') {
    if(args.length < 0){
      return list;
    }
    else{
      return list.filter((item: any) => item.name.toLowerCase().includes(args.toLowerCase()))
    }
  }

}
