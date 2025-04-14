import { Component, Output, EventEmitter, input,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  userId =input.required<string>();
  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    },this.userId());
    this.close.emit();
    // Emit the new task to the parent component
    // this.newTask.emit(newTask);
  }
}
