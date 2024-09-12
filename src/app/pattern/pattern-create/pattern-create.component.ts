import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { patternCreateTexts } from '../../constants/texts';
import { CommonModule } from '@angular/common';
import { TodoI } from '../../todo/todo.interface';
import { Observable } from 'rxjs';
import { TodoService } from '../../todo/todo.service';

@Component({
  selector: 'app-pattern-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TodoListComponent, CommonModule],
  templateUrl: './pattern-create.component.html',
  styleUrl: './pattern-create.component.scss',
})
export class PatternCreateComponent {
  formBuilder = inject(FormBuilder);
  _patternCreateTexts = patternCreateTexts;
  searchResult!: Observable<TodoI[]>;
  todoService = inject(TodoService);

  patternForm: FormGroup = this.formBuilder.group({
    patternTitle: this.formBuilder.control(''),
    chapters: this.formBuilder.array([]),
    searchTodo: this.formBuilder.control(''),
  });

  get chapters() {
    return this.patternForm.controls['chapters'] as FormArray;
  }

  get todos() {
    return (this.chapters as any).controls['todos'] as FormArray;
  }

  addChapter() {
    this.chapters.push(
      new FormGroup({
        chapterTitle: new FormControl(),
        todos: this.formBuilder.array([]),
      })
    );
  }

  addTodo() {
    this.todos.push(
      new FormGroup({
        action: new FormControl(''),
        nbStitch: new FormControl(0),
      })
    );
  }

  findTodo() {
    this.searchResult = this.todoService.searchTodo$(
      this.patternForm.get('searchTodo')?.value
    );
  }
}
