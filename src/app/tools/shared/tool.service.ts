import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_TOOLS } from './mock-tools';
import { Tool } from './tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor() { }

  getAll(): Observable<Tool[]> {
    return of(MOCK_TOOLS)
  }
}
