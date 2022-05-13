export interface IStorageService {
  get(key: string): any;
  set(key: string, value: any): void;
  removeItem(key: string): void;
  clear(): void;
}
