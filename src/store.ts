import { writable } from 'svelte/store';
import type { TodoType } from './types';

export const inputValue = writable<string>();
const initialTodos: TodoType[] = [];

function createTodos() {
	const { subscribe, update } = writable<TodoType[]>(initialTodos);

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

export const todos = createTodos();
