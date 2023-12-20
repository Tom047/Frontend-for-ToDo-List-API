import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  newTask: Task = new Task();

  constructor(private taskService: TaskService) {}

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe((data: Task) => {
      console.log('Task created:', data);
      // Очистить форму или выполнить переадресацию
    });
  }
}
