import type { FromLanguage, Language } from '../types'
import axios from 'axios'

export async function translate(
	text: string,
	fromLanguage: FromLanguage,
	toLanguage: Language,
) {
	const url = import.meta.env.VITE_TRANSLATE_API_URL

	if (text === '') {
		return
	}
	try {
		const response = await axios.post(url, {
			text,
			fromLanguage,
			toLanguage,
		})
		return response.data.translatedText
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(
				error.response?.data?.message ||
					'An error occurred. Please try again later.',
			)
		}
	}
}
