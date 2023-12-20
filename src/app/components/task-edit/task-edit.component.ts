import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task = new Task();
  id: number = 0;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(this.id).subscribe((data: Task) => {
      this.task = data;
    });
  }

  updateTask(): void {
    this.taskService.updateTask(this.task).subscribe((data: Task) => {
      console.log('Task updated:', data);
      // Очистить форму или выполнить переадресацию
    });
  }
}
