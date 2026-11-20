import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from './contact-form/contact-form';

@Component({
  imports: [ContactForm],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-reactive-forms-demo');
}
