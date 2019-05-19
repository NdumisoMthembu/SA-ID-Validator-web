import { Pipe, PipeTransform } from '@angular/core';
import { IdNumberDetails } from '../models/idnumber.details.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: IdNumberDetails[], val:string): any {
    if(!val) return data

    let searchText = Number(val);
    if(searchText ===1) return data;
    if(searchText ===2) return data.filter(x=>x.Status.toLocaleLowerCase() =='valid');
    if(searchText ===3) return data.filter(x=>x.Status.toLocaleLowerCase() =='invalid');
  }

}
