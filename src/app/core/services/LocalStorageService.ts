import { Inject, Injectable } from '@angular/core';
import { StorageService } from '../interfaces/data-saver.interface';
import { IngredientsGroup } from '../interfaces/ingredients-group.interace';

@Injectable()
export class LocalStorageService implements StorageService {
  readonly savedPlansKey = '__saved-plans-ids';

  constructor(){

  }

  save(planId: string, data: object) {
    localStorage.setItem(planId, JSON.stringify(data));
  }

  load(planId: string): IngredientsGroup[] {
    const savedData = localStorage.getItem(planId);
    return savedData ? (JSON.parse(savedData) as IngredientsGroup[]) : [];
  }

  getSavedPlanList(): string[] {
    const value = localStorage.getItem(this.savedPlansKey);
    return value ? JSON.parse(value) : [];
  }

  private updateSavedIdList(newId:string){
    const keysList = this.getSavedPlanList();
    keysList.push(newId);
    localStorage.setItem(this.savedPlansKey, JSON.stringify(keysList));
  }
}
