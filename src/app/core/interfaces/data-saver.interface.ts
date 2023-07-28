export interface StorageService {
  savePlan: (planId: string, data: object) => void;
  loadPlan: (planId: string) => object;
  removePlan?: (planId: string) => void;
}
