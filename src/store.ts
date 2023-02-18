import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { INITIAL_TODO_PARAM, LOCAL_STORAGE_KEY, INITIAL_APP_STATE } from './param/const';
import type { TodoType } from './types';

const initialTodos = browser
	? (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || `[]`) as TodoType[])
	: [];

/**
 * 入力中の値を管理する
 */
export const inputValue = writable<string>();

/**
 * アプリの状態を管理する
 */
export const appState = writable(INITIAL_APP_STATE);

/**
 * エラー表示
 */
export const errors = writable<string>();

/**
 * Todoリストの管理
 */
export const todos = createTodos();

function createTodos() {
	const { subscribe, update } = writable<TodoType[]>(initialTodos);

	subscribe((todos) => browser && localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)));

	return {
		subscribe,
		addTodo: (title: string) =>
			update((todos) => {
				const todo: TodoType = {
					...INITIAL_TODO_PARAM,
					id: crypto.randomUUID(),
					title
				};
				return [...todos, todo];
			}),
		removeTodo: (targetId: string) => update((todos) => todos.filter(({ id }) => id !== targetId)),
		onCheckTodo: (targetId: string) =>
			update((todos) =>
				todos.map((todo) =>
					todo.id === targetId
						? {
								...todo,
								isCompleted: !todo.isCompleted
						  }
						: todo
				)
			),
		toggleIsEdit: (targetId: string) =>
			update((todos) =>
				todos.map((todo) =>
					todo.id === targetId
						? {
								...todo,
								isEdit: !todo.isEdit
						  }
						: {
								...todo,
								isEdit: false
						  }
				)
			),
		updateTitle: (targetId: string, title: string) =>
			update((todos) =>
				todos.map((todo) =>
					todo.id === targetId
						? {
								...todo,
								title
						  }
						: todo
				)
			),
		exitEditMode: () =>
			update((todos) =>
				todos.map((todo) => ({
					...todo,
					isEdit: false
				}))
			)
	};
}
