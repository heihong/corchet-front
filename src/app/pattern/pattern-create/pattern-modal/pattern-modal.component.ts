import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { modalPatternTexts } from '../../../share/texts';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ChapterModalComponent } from '../chapter-modal/chapter-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pattern-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogContent,
    MatButtonModule,
  ],
  templateUrl: './pattern-modal.component.html',
  styleUrl: './pattern-modal.component.scss',
})
export class PatternModalComponent {
  _modalPatternTexts = modalPatternTexts;
  readonly dialogRef = inject(MatDialogRef<ChapterModalComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  cancel(): void {
    this.dialogRef.close();
  }
}
