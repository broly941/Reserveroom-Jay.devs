class StorageUtils {
    constructor(public storage: Storage) {
    }
    put = (key: string, value: any) => {
        value instanceof Object ? this.storage.setItem(key, JSON.stringify(value)) : this.storage.setItem(key, value);
    };
    get = (key: string): any => {
        try {
            return JSON.parse(this.storage.getItem(key) as string);
        } catch (e) {
            return this.storage.getItem(key)
        }
    };
    remove = (key: string) => {
        this.storage.removeItem(key);
    };
    clear = () => {
        this.storage.clear();
    };
}

export const localStorageUtil = new StorageUtils(localStorage);
export const sessionStorageUtil = new StorageUtils(sessionStorage);
