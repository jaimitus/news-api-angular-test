import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Trending {{name}}!</h1>`,
  styles: [`h1 { font-family: "Bree Serif", serif; background: linear-gradient(279deg,#00a562,#36c275 50%,#00d301); padding: 2px 0px 2px 20px;border:3px solid #fff; color: #fff }`]
})
export class HelloComponent  {
  @Input() name: string;
}
