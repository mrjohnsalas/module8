import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { Subscription } from '../models/subscription.enum';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  model: Register = { username: '', password: '', subscription: Subscription.Free, promotions: true };
  subscriptions: any[] = [];

  constructor() { }

  ngOnInit() {
    for (let item in Subscription) {
      if (isNaN(Number(item))) {
        this.subscriptions.push( { text: item, value: Subscription[item]});
      }
    }

  }

  submit() {
    console.log(this.model);
  }

  refresh() {
    this.model = { username: '', password: '', subscription: Subscription.Free, promotions: true };
  }
}
