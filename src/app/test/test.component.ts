import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  msg: string = 'Hello, Welcome to the Page!';
  a = 10;
  b = 20;
  ans = this.a + this.b;
  inputVal = 'Hello';
  isDisabled = false;
  imgSrc = '/assets/code.jpg';
  counter = 0;
  staticInput = 'Static Two way binding';
  dynamicInput = '';
  display(msg: string) {
    alert('Click Event is Triggerd');
    alert(`${msg} user`);
  }
  incr() {
    this.counter++;
  }
  onKeyPress(event: any) {
    // console.log(event)
    console.log(event.target.value);

    // alert('KeyPress');
  }
  onKeyDown() {
    alert('KeyDown');
  }
  onKeyUp(event: any) {
    console.log(event.target.value);
    // alert('KeyUp');
  }
  onFocus() {
    console.log('focus');
  }
  onSelect() {
    alert('Select');
  }
  inputText = '';
  dynamicVal = '';
  show() {
    this.dynamicVal = this.inputText;
  }
}
