import {
  Component,
  computed,
  signal,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent  } from '../shared/card/card.component';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[this.getRandomIndex()]);
  //UserImagePath=computed(()=>`assets/users/${this.selectedUser().avatar}`);
  // @Input({required:true}) name !:string;
  // @Input({required:true}) avatar !:string;
  // @Input({required:true}) id !:string;
  // @Output() select = new EventEmitter<string>();
  // name =input.required<string>();
  // avatar =input.required<string>();
  // id =input.required<string>();
  select = output<string>();
  selected = input.required<boolean>();
  user = input.required<User>();
  // get UserImagePath() {
  //   // return `assets/users/${this.selectedUser().avatar}`;
  //   return `assets/users/${this.avatar}`;
  // }
  UserImagePath = computed(() => `assets/users/${this.user().avatar}`);
  onUserSelected() {
    this.select.emit(this.user().id);
  }
  private getRandomIndex(): number {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
