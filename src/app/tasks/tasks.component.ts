import { Component, input, computed } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent,NewTaskComponent]
})
export class TasksComponent {
  name =input<string>();
  userId =input.required<string>();
  isAddingTask = false;
  constructor(private tasksService: TasksService) {}
  // selectedUserTasks = computed(() =>
  //   this.tasks.filter((task) => task.userId === this.userId()))
  // Use a getter to dynamically compute selected tasks
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }
  
  onStartAddTask() {
    this.isAddingTask = true;
  }
  
  onCloseTask() {
    this.isAddingTask = false;
  }
}