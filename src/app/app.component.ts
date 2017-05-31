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

  public circle_x_axis = undefined;
  public circle_y_axis = undefined;
  public circle_radius = undefined;
  public circle_color = undefined;

  public line_x1_axis = undefined;
  public line_y1_axis = undefined;
  public line_x2_axis = undefined;
  public line_y2_axis = undefined;
  public line_color = undefined;

  public square_x1_axis = undefined;
  public square_y1_axis = undefined;
  public square_x2_axis = undefined;
  public square_y2_axis = undefined;
  public square_color = undefined;

  constructor(private elRef: ElementRef) {
    // setTimeout(() => this.drawingFuncitionsTest(), 4000);
  }

  // BASIC FUNCTIONS - BASIC FUNCTIONS - BASIC FUNCTIONS - BASIC FUNCTIONS - BASIC FUNCTIONS
  paintPixel(x: number, y: number, color: string) {
    try {
      this.elRef.nativeElement.querySelector('.pixel[data-pos-x="' + x + '"][data-pos-y="' + y + '"]').style.background = color;
    } catch (error) {
      console.log(error);
    }
  }

  cleanPixel(x: number, y: number) {
    this.paintPixel(x, y, 'white');
  }

  // BUTTONS - BUTTONS - BUTTONS - BUTTONS - BUTTONS - BUTTONS - BUTTONS - BUTTONS - BUTTONS 
  btnPaintPixel() {
    this.paintPixel(this.x_axis, this.y_axis, this.color);
  }

  btnCleanPixel() {
    this.cleanPixel(this.x_axis, this.y_axis);
  }

  btnDrawLineShape() {
    this.drawLineShape(this.line_x1_axis, this.line_y1_axis, this.line_x2_axis, this.line_y2_axis, this.line_color);
  }

  btnDrawSquareShape() {
    this.drawSquareShape(this.square_x1_axis, this.square_y1_axis, this.square_x2_axis, this.square_y2_axis, this.square_color);
  }

  btnDrawCircleShape() {
    this.drawCircleShape(this.circle_x_axis, this.circle_y_axis, this.circle_radius, this.circle_color);
  }

  // SHAPES - SHAPES - SHAPES - SHAPES - SHAPES - SHAPES - SHAPES - SHAPES - SHAPES - SHAPES 
  drawCircleShape(x1: number, y1: number, radius: number, color: string) {
    let x: number = radius;
    let y: number = 0;
    let err = 0;
    while (x >= y) {
      this.paintPixel(x1 + x, y1 + y, color);
      this.paintPixel(x1 + y, y1 + x, color);
      this.paintPixel(x1 - y, y1 + x, color);
      this.paintPixel(x1 - x, y1 + y, color);
      this.paintPixel(x1 - x, y1 - y, color);
      this.paintPixel(x1 - y, y1 - x, color);
      this.paintPixel(x1 + y, y1 - x, color);
      this.paintPixel(x1 + x, y1 - y, color);

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

  drawLineShape(x1: number, y1: number, x2: number, y2: number, color: string) {
    if (y1 == y2 && x1 < x2) {
      do {
        this.paintPixel(x1, y1, color);
        x1++;
      } while (x1 <= x2)
    }
    else if (y1 == y2 && x1 > x2) {
      do {
        this.paintPixel(x1, y1, color);
        x1--;
      } while (x1 >= x2)
    }
    else if (x1 == x2 && y1 < y2) {
      do {
        this.paintPixel(x1, y1, color);
        y1++;
      } while (y1 <= y2)
    }
    else if (x1 == x2 && y1 > y2) {
      do {
        this.paintPixel(x1, y1, color);
        y1--;
      } while (y1 >= y2)
    }
  }

  drawSquareShape(x1: number, y1: number, x2: number, y2: number, color: string) {
    this.drawLineShape(x1, y1, x2, y1, color);
    this.drawLineShape(x2, y1, x2, y2, color);
    this.drawLineShape(x2, y2, x1, y2, color);
    this.drawLineShape(x1, y2, x1, y1, color);
  }


  // UNIT TESTS - UNIT TESTS - UNIT TESTS - UNIT TESTS - UNIT TESTS - UNIT TESTS - UNIT TESTS
  drawingFuncitionsTest() {
    this.drawLineShape(2, 3, 2, 20, 'red'); // Draw vertical line (top-bottom)
    this.drawLineShape(5, 15, 5, 5, 'green'); // Draw vertical line (bottom-top)
    this.drawLineShape(2, 3, 15, 3, 'blue'); // Draw horizontal line (left-right)
    this.drawLineShape(13, 7, 0, 7, 'yellow'); // Draw horizontal line (right-left)

    this.drawCircleShape(17, 9, 6, 'purple'); // Draw circle

    this.drawSquareShape(9, 16, 38, 23, 'black'); // Draw square
  }
}
