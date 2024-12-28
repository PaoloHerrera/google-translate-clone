import { AUTO_LANGUAGE } from '../constants'
import {
	type State,
	type Action,
	type Language,
	type FromLanguage,
	ActionType,
} from '../types.d'
import { useReducer, useCallback } from 'react'

const initialState: State = {
	fromLanguage: 'auto',
	toLanguage: 'en',
	fromText: '',
	result: 'Traducción',
	loading: false,
}

const reducer = (state: State, action: Action): State => {
	const { type } = action

	switch (type) {
		case ActionType.INTERCHANGE_LANGUAGES: {
			if (state.fromLanguage === AUTO_LANGUAGE) {
				return state
			}

			const auxFromText = state.fromText
			const auxFromLanguage = state.fromLanguage

			return {
				...state,
				fromText: state.result,
				toLanguage: auxFromLanguage,
				fromLanguage: state.toLanguage,
				result: auxFromText,
			}
		}

		case ActionType.SET_FROM_LANGUAGE: {
			if (state.fromLanguage === action.payload) {
				return state
			}

			const loading = state.fromText !== ''

			return {
				...state,
				fromLanguage: action.payload,
				result: loading ? '' : initialState.result,
				loading,
			}
		}

		case ActionType.SET_TO_LANGUAGE: {
			if (state.toLanguage === action.payload) {
				return state
			}
			const loading = state.fromText !== ''
			return {
				...state,
				toLanguage: action.payload,
				result: loading ? '' : initialState.result,
				loading,
			}
		}

		case ActionType.SET_FROM_TEXT: {
			const loading = action.payload !== ''

			return {
				...state,
				fromText: action.payload,
				loading,
				result: loading ? 'Traduciendo...' : initialState.result,
			}
		}

		case ActionType.SET_RESULT:
			return {
				...state,
				result: action.payload,
				loading: false,
			}
		default:
			return state
	}
}

export function useStore() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const { fromLanguage, toLanguage, fromText, result, loading } = state

	// Es mala practica retornar el dispatch directamente
	// return { state, dispatch }
	// En su lugar, se debe retornar una función que envuelva el dispatch
	const interchangeLanguages = () =>
		dispatch({ type: ActionType.INTERCHANGE_LANGUAGES })
	const setFromLanguage = (payload: FromLanguage) =>
		dispatch({ type: ActionType.SET_FROM_LANGUAGE, payload })
	const setToLanguage = (payload: Language) =>
		dispatch({ type: ActionType.SET_TO_LANGUAGE, payload })
	const setFromText = (payload: string) =>
		dispatch({ type: ActionType.SET_FROM_TEXT, payload })
	const setResult = useCallback((payload: string) => {
		dispatch({ type: ActionType.SET_RESULT, payload })
	}, [])

	return {
		fromLanguage,
		toLanguage,
		fromText,
		result,
		loading,
		interchangeLanguages,
		setFromLanguage,
		setToLanguage,
		setFromText,
		setResult,
	}
}
