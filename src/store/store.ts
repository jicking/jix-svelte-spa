import { writable } from "svelte/store";
import { StoreLocalStorageKeys } from "./enums";
import {
  getArrayFromStorage,
  getNumberFromStorage,
  getObjectFromStorage,
  setValueToStorage,
} from "./utils";
import type { Todo, UserAuth } from "./schema";

function useCount() {
  // stores, will get initial val from local storage if key exists
  const { subscribe, set, update } = writable(
    getNumberFromStorage(StoreLocalStorageKeys.count)
  );

  // subscribe to store updates to save it to local storage
  subscribe((val: number) =>
    setValueToStorage(StoreLocalStorageKeys.count, val)
  );

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
    reset: () => set(0),
    set,
  };
}

function useUserAuth() {
  // stores, will get initial val from local storage if key exists
  const { subscribe, set } = writable(
    getObjectFromStorage<UserAuth>(StoreLocalStorageKeys.userAuth)
  );

  // subscribe to store updates to save it to local storage
  subscribe((val: UserAuth | null) =>
    setValueToStorage(StoreLocalStorageKeys.userAuth, val)
  );

  const setUserAuth = (
    username: string,
    securityToken: string,
    refreshToken: string
  ) => {
    const userAuth: UserAuth = {
      username,
      securityToken,
      refreshToken,
      isPullingToken: false,
    };
    set(userAuth);
  };

  const isAuthSet = (): boolean => {
    const userAuth = getObjectFromStorage<UserAuth>(
      StoreLocalStorageKeys.userAuth
    );
    if (userAuth?.username && userAuth.refreshToken && userAuth.securityToken)
      return true;

    return false;
  };

  return {
    subscribe,
    setUserAuth,
    isAuthSet,
    clear: () => set(null),
  };
}

function useTodos() {
  // stores, will get initial val from local storage if key exists
  const { subscribe, set } = writable(
    getArrayFromStorage<Todo>(StoreLocalStorageKeys.todos)
  );

  // subscribe to store updates to save it to local storage
  subscribe((val: Todo[]) =>
    setValueToStorage(StoreLocalStorageKeys.todos, val)
  );

  const addNew = (content: string) => {
    const newTodo: Todo = {
      content,
      id: "123",
      isDone: false,
    };
    const todos: [Todo] | null = getObjectFromStorage<[Todo]>(
      StoreLocalStorageKeys.todos
    );
    if (todos) {
      todos?.push(newTodo);
      set(todos);
      return;
    }

    // if todos is nullish
    set([newTodo]);
  };

  const clear = () => {
    set([]);
  };

  return {
    subscribe,
    clear,
    addNew,
  };
}

// Global stores
export const count = useCount();
export const userAuth = useUserAuth();
export const todos = useTodos();
