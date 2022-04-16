//
// Trabajo con fromEvent
// Esto lo que permite crear un evento como observable
// Por ejemplo un keymove, etc, pasarlo a un observable
//


import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';  // Importamos fromEvent....

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_2_fromEvent';



  constructor(){}

  public ngOnInit():void{
    const el = document.getElementById('elemento')  // ya tenemos el elmento en el la contante, lo ideal seria usar viewchild
    const mouseMove = fromEvent(el, 'mouseover')

    mouseMove.subscribe( (e: any) => {
      console.log(`Coordenadas: X : ${e.clientx}, Y: ${e.clienty}`)
    })

  }

}
