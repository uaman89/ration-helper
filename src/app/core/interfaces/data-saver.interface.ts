export interface StorageService {
  save: (planId: string, data: object) => void;
  load: (planId: string) => object;
  remove?: (planId: string) => void;
}
