import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-angular-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.css',
})
export class AngularDirectivesComponent {
  display = false;
  num = -90;
  displayElement: boolean = false;
  showList: boolean = false;
  hasText: boolean = false;
  age = 13;
  personAge = 0;
  isEligible: boolean = false;
  colorMode = 'lightMode';
  colorVal = 'navy';
  fontSize = '30px';
  isItalic = 'italic';
  applyVal = {
    color: 'darkgreen',
    'font-size': '25px',
    'font-weight': 'bold',
  };
  fullStackDev = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Java',
    },
    {
      id: 4,
      name: 'C#',
    },
    {
      id: 5,
      name: 'Node.js',
    },
  ];

  employee = signal<empInterface[]>([
    {
      id: 1,
      name: 'Aman',
      role: 'Frontend Dev',
    },
    {
      id: 2,
      name: 'Madhur',
      role: 'Mainframe',
    },
    {
      id: 3,
      name: 'Naresh',
      role: 'Buisness',
    },
    {
      id: 4,
      name: 'Asha',
      role: 'Housewife',
    },
  ]);

  show() {
    // If true make it false, if false make it true
    this.displayElement = !this.displayElement;
  }

  checkEligibility() {
    this.isEligible = this.personAge >= 18;
  }

  textInput(e: any) {
    this.hasText = e.target.value !== '';
  }

  toggleMode() {
    if (this.colorMode === 'lightMode') {
      this.colorMode = 'darkMode';
    } else {
      this.colorMode = 'lightMode';
    }
  }
}
