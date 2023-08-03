import { Inject, Injectable } from '@angular/core';
import { StorageService } from '../interfaces/data-saver.interface';
import { IngredientsGroup } from '../interfaces/ingredients-group.interace';

@Injectable()
export class LocalStorageService implements StorageService {
  save(planId: string, data: object) {
    localStorage.setItem(planId, JSON.stringify(data));
  }

  load(planId: string): IngredientsGroup[] {
    const savedData = localStorage.getItem(planId);
    return savedData ? (JSON.parse(savedData) as IngredientsGroup[]) : [];
  }
}
