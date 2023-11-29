import { SafePrimitives } from '@helpers/types/general';

// Check if the browser supports storages, this is an explicit check for the headless browsers not to fail
export function hasStorage() {
  return typeof window !== 'undefined' && typeof Storage !== 'undefined';
}

function createStorageUtil(storage: Storage) {
  return {
    set(key: string, value: SafePrimitives) {
      if (hasStorage()) {
        storage.setItem(key, JSON.stringify(value));
      }
    },
    get(key: string) {
      if (hasStorage()) {
        const value = storage.getItem(key);

        if (value) {
          return JSON.parse(value);
        }
      }
    },
    remove(key: string) {
      if (hasStorage()) {
        storage.removeItem(key);
      }
    },
    clear() {
      if (hasStorage()) {
        storage.clear();
      }
    },
  };
}
const sessionStorageUtil = createStorageUtil(window.sessionStorage);
const localStorageUtil = createStorageUtil(window.localStorage);

export { sessionStorageUtil, localStorageUtil };
