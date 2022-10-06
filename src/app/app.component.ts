import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public i = 0;

  public fetchPromise(): void {
    this.doWait(this.i++);
  }

  public genereateRandomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public doPromise = (n: number) => {
    const promiseFunction = new Promise((resolve) => {
      setTimeout(() => {
        resolve('RESULT: ' + n.toString());
      }, this.genereateRandomInRange(0, 5000));
    });

    return promiseFunction;
  };

  public doWait = async (i: number) => {
    console.log('Promise fetched for ' + i.toString());
    const promiseFunction = this.doPromise(i);
    const promiseReturn = await promiseFunction;
    console.log(promiseReturn);
  };
}
