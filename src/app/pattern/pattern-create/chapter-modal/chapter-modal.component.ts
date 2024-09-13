import { Component, DestroyRef, inject, model, OnDestroy } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { modalChapterTexts } from '../../../share/texts';
import { Observable, Subscription } from 'rxjs';
import { TodoI } from '../../../todo/todo.interface';
import { TodoService } from '../../../todo/todo.service';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-chapter-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    CommonModule,
    MatDialogContent,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './chapter-modal.component.html',
  styleUrl: './chapter-modal.component.scss',
})
export class ChapterModalComponent {
  readonly dialogRef = inject(MatDialogRef<ChapterModalComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  _modalChapterTexts = modalChapterTexts;
  formBuilder = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  action = '';
  nbstitch = 0;
  searchResult!: Observable<TodoI[]>;
  todoService = inject(TodoService);
  todos: TodoI[] = [];
  sub!: Subscription;

  cancel(): void {
    this.dialogRef.close();
  }

  addTodo(todo: TodoI, event: any) {
    if (event.target.checked) {
      this.todos.push(todo);
    } else {
      const index = this.todos.findIndex((data) => (data.id = todo.id));
      if (index != -1) {
        this.todos.splice(index, 1);
      }
    }
  }

  findTodo() {
    this.searchResult = this.todoService.searchTodo$({
      action: this.action,
      nbstitch: this.nbstitch,
    });
  }

  createTodo(todo: TodoI) {
    this.todos.push(todo);
    this.todoService
      .addTodo$({
        action: todo.action,
        nbstitch: todo.nbstitch,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => console.log('success'),
        error: () => console.error('error'),
      });
  }
}
