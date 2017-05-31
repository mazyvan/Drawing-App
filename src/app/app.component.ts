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
  constructor(private elRef: ElementRef) {
    setTimeout(() => this.drawCircle(15, 12, 12), 3000);
  }

  paintPixel(x: number, y: number, color: string) {
    this.elRef.nativeElement.querySelector('.pixel[data-pos-x="' + x + '"][data-pos-y="' + y + '"]').style.background = color;
  }

  btnPaintIt() {
    this.paintPixel(this.x_axis, this.y_axis, this.color);
  }


  drawCircle(x0: number, y0: number, radius: number) {
    console.log('starting drawCircle function');
    let x: number = radius;
    let y: number = 0;
    let err = 0;
    while (x >= y) {
      this.paintPixel(x0 + x, y0 + y, 'blue');
      this.paintPixel(x0 + y, y0 + x, 'blue');
      this.paintPixel(x0 - y, y0 + x, 'blue');
      this.paintPixel(x0 - x, y0 + y, 'blue');
      this.paintPixel(x0 - x, y0 - y, 'blue');
      this.paintPixel(x0 - y, y0 - x, 'blue');
      this.paintPixel(x0 + y, y0 - x, 'blue');
      this.paintPixel(x0 + x, y0 - y, 'blue');

      y += 1;
      if (err <= 0) {
        err += 2 * y + 1;
      }
      if (err > 0) {
        x -= 1;
        err -= 2 * x + 1;
      }
    }
  }

}
