import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component'; // Импортируйте AuthComponent
import { TaskListComponent } from './components/task-list/task-list.component'; // Импортируйте TaskListComponent

export const routes: Routes = [
  { path: 'register', component: AuthComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' } // Перенаправление на страницу регистрации
];
