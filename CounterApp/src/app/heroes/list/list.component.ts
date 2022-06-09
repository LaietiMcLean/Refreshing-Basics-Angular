import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent{

    heroes: string[] = ['Spiderman',
                        'Ironman',
                        'Hulk',
                        'Thor',
                        'Capitán América'];
    heroeBorrado: string = ''

    borrarHeroe() {
     this.heroeBorrado = this.heroes.shift() || '';
    }

}
