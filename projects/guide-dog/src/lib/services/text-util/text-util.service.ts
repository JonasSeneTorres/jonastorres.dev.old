import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextUtilService {
  wordsForMinutes = 200;
  private _output = {
    readingTime: 0,
    suggestedWords: [{}],
  };
  private _value$: BehaviorSubject<any> = new BehaviorSubject(this._output);

  get value$(): Observable<string> {
    return this._value$.asObservable();
  }

  constructor() {}

  insertNewText(value: string) {
    this.calculateReadingTime(value);
    this.calculateWordOccurrence(value);
  }

  private calculateReadingTime(value: string): void {
    const totalWords = this.separateClearedWords(value).length;
    this._output.readingTime = Math.ceil(totalWords / this.wordsForMinutes);
    this._value$.next(this._output);
  }

  private calculateWordOccurrence(value: string): void {
    const wordsArray = this.separateClearedWords(value);
    let output: { key: string; power: number }[] = [];

    for (const word of wordsArray) {
      const index = output.findIndex((item: any) => item.key === word);
      const piece = +((1 / wordsArray.length) * 100).toFixed(2);

      if (index > -1) {
        output[index].power += piece;
        output[index].power = +output[index].power.toFixed(2);
        continue;
      }

      output.push({
        key: word,
        power: piece,
      });
    }

    this._output.suggestedWords = output
      .sort(this.sortByPowerDesc)
      .slice(0, 20);
    this._value$.next(this._output);
  }

  private separateClearedWords(value: string): string[] {
    return value
      .trim()
      .replace(/\n|<.*?>/g, '')
      .replace(/&nbsp;/g, ' ')
      .split(/\s+/);
  }

  private sortByPowerDesc(prevValue: any, nextValue: any) {
    if (prevValue.power < nextValue.power) {
      return 1;
    }
    if (prevValue.power > nextValue.power) {
      return -1;
    }
    return 0;
  }
}
