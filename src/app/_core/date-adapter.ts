import {Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

function isNumber(value: any): boolean {
  return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
@Injectable()
export class NgbDateCustomAdapter extends NgbDateAdapter<Date> {
  /**
   * Converts a native `Date` to a `NgbDateStruct`.
   */
  fromModel(date: Date): NgbDateStruct {
    const newDay = new Date(date);
    return (newDay) ? this._fromNativeDate(newDay) : null;
  }

  /**
   * Converts a `NgbDateStruct` to a native `Date`.
   */
  toModel(date: NgbDateStruct): Date {
    return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) ? this._toNativeDate(date) :
      null;
  }

  protected _fromNativeDate(date: Date): NgbDateStruct {
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
  }

  protected _toNativeDate(date: NgbDateStruct): Date {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // avoid 30 -> 1930 conversion
    jsDate.setFullYear(date.year);
    return jsDate;
  }
}
