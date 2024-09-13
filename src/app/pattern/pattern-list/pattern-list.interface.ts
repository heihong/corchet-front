import { chapterI } from '../pattern-create/chapter-modal/chapter.interface';

export interface PatternI {
  id?: number;
  title: string;
  chapter: chapterI[];
}
