export interface AppStateType {
	errors: string[];
}

export interface TodoType {
	id: string;
	title: string;
	isCompleted: boolean;
	isEdit: boolean;
}
