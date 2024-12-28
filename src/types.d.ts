import type {
	SUPPORTED_LANGUAGES,
	AUTO_LANGUAGE,
	ACTION_TYPES,
} from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
	fromLanguage: FromLanguage
	toLanguage: Language
	fromText: string
	result: string
	loading: boolean
}

export enum ActionType {
	INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
	SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
	SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
	SET_FROM_TEXT = 'SET_FROM_TEXT',
	SET_RESULT = 'SET_RESULT',
}

export type Action =
	| { type: ActionType.INTERCHANGE_LANGUAGES }
	| { type: ActionType.SET_FROM_LANGUAGE; payload: FromLanguage }
	| { type: ActionType.SET_TO_LANGUAGE; payload: Language }
	| { type: ActionType.SET_FROM_TEXT; payload: string }
	| { type: ActionType.SET_RESULT; payload: string }

export enum SectionType {
	FROM = 'from',
	TO = 'to',
}
