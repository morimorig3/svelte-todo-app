import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { LOCAL_STORAGE_KEY } from './param/const';
import type { TodoType } from './types';

const initialTodos = browser
	? (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || `[]`) as TodoType[])
	: [];

/**
 * 入力中の値を管理する
 */
export const inputValue = writable<string>();

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
					id: crypto.randomUUID(),
					isCompleted: false,
					title
				};
				return [...todos, todo];
			}),
		removeTodo: (removeId: string) => update((todos) => todos.filter(({ id }) => id !== removeId)),
		onCheckTodo: (checkId: string) =>
			update((todos) =>
				todos.map((todo) =>
					todo.id === checkId
						? {
								...todo,
								isCompleted: !todo.isCompleted
						  }
						: todo
				)
			)
	};
}
