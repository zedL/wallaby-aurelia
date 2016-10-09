
export class LocalStorageService {

  public setItem(key: string, obj: any) {
    if (!obj) return;
    let value = JSON.stringify(obj);
    localStorage.setItem(key, value);
  }

  public getItem<T>(key: string): T {
    if (!key) return;
    let value = localStorage.getItem(key);
    return <T>JSON.parse(value);
  }

}
