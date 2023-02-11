import { writable } from 'svelte/store';
import type { TodoType } from './types';

export const inputValue = writable<string>();
const initialTodos: TodoType[] = [
	{
		id: crypto.randomUUID(),
		title: 'タスク1',
		isCompleted: false
	},
	{
		id: crypto.randomUUID(),
		title: 'タスク2',
		isCompleted: false
	},
	{
		id: crypto.randomUUID(),
		title: 'タスク3',
		isCompleted: false
	}
];

/**
 * タスクを削除する
 */
// function handleRemove(deleteId: string) {
// 	todos = todos.filter(({ id }) => id !== deleteId);
// }
/**
 * チェックボックスのトグルハンドラ
 */
// function handleChange(changeId: string) {
// 	todos = todos.map((todo) =>
// 		todo.id === changeId
// 			? {
// 					...todo,
// 					isCompleted: !todo.isCompleted
// 			  }
// 			: todo
// 	);
// }
/**
 * タスクを追加する
 */
// function addTodo() {
// 	if (!$inputValue) return;
// 	inputValue.set('');
// }
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
