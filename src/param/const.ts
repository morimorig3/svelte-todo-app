import type { AppStateType, TodoType } from '../types';

export const LOCAL_STORAGE_KEY = 'svelte-todo-app';

export const SAMPLE_TASK = [];

export const VALIDATION_MESSAGE_BLANK_TEXT = 'Please enter a task title...';

export const ADD_TODO_TEXT_BOX_PLACEHOLDER = 'Enter a task';

export const INITIAL_TODO_PARAM: TodoType = {
	id: '',
	title: '',
	isCompleted: false,
	isEdit: false
};

export const INITIAL_APP_STATE: AppStateType = {
	errors: []
};
