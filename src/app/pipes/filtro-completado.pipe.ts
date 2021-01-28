import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

// la propiedad pure:false es llamada para cada cambio que detecte Angular
@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform( listas:Lista[], tCompletada: boolean = true): Lista[] {
    
    return listas.filter( lista => lista.terminada === tCompletada);
    
    
  }

}
