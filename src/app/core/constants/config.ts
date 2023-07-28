import { InjectionToken } from '@angular/core';
import { StorageService } from '../interfaces/data-saver.interface';

export const STORAGE_SERVICE = new InjectionToken<StorageService>('storageService');
