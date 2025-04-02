import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}
  onRolechange$: Subject<string> = new Subject<string>();

  onCLassChange: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
