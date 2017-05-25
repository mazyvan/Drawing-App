import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arr = Array;
  public x_axis = undefined;
  public y_axis = undefined;
  public color = undefined;
  constructor(private elRef:ElementRef) { }

  paint() {
    this.elRef.nativeElement.querySelector('.pixel[data-pos-x="' + this.x_axis + '"][data-pos-y="' + this.y_axis + '"]').style.background = this.color;
  }
}
