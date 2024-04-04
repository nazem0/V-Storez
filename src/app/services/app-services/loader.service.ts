import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private $loading = new BehaviorSubject(false);
  public readonly loading = this.$loading.asObservable();
  startLoading(){
    this.$loading.next(true);
  }
  stopLoading(){
    this.$loading.next(false);
  }
}
