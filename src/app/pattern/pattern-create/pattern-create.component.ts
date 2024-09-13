import { Component, DestroyRef, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { patternCreateTexts } from '../../share/texts';
import { CommonModule } from '@angular/common';
import { TodoI } from '../../todo/todo.interface';
import { Observable, Subject } from 'rxjs';
import { TodoService } from '../../todo/todo.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ChapterModalComponent } from './chapter-modal/chapter-modal.component';
import { PatternModalComponent } from './pattern-modal/pattern-modal.component';
import { chapterI } from '../pattern-element/pattern-element.interface';
import { PatternI } from '../pattern-list/pattern-list.interface';
import { PatternService } from '../pattern-list/pattern-list.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pattern-create',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './pattern-create.component.html',
  styleUrl: './pattern-create.component.scss',
})
export class PatternCreateComponent {
  formBuilder = inject(FormBuilder);
  patternService = inject(PatternService);
  _patternCreateTexts = patternCreateTexts;
  searchResult!: Observable<TodoI[]>;
  todoService = inject(TodoService);
  readonly dialog = inject(MatDialog);
  destroyRef = inject(DestroyRef);
  pattern: PatternI = { title: '', chapter: [] };
  sendPatternResult: PatternI = { title: '', chapter: [] };

  openDialogPattern() {
    const dialogRef = this.dialog.open(PatternModalComponent, {
      data: {
        patternTitle: this.pattern?.title || '',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.pattern.title = result;
        this.sendPatternResult.title = result;
      }
    });
  }

  openDialogChapter(): void {
    const dialogRef = this.dialog.open(ChapterModalComponent, {
      data: {
        patternTitle: this.pattern.title,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.pattern.chapter.push(result);
        let todos = result.todos.map((data: TodoI) => data.id);
        this.sendPatternResult.chapter.push({
          title: result.title,
          todos: todos,
        });
      }
    });
  }

  sendPattern() {
    this.patternService
      .sendPatterns$(this.sendPatternResult)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
