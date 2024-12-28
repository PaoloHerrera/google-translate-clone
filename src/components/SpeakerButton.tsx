import { Button } from 'react-bootstrap'
import { SpeakerIcon } from './Icons'
import type { Language } from '../types.d'
import { VOICE_LANGUAGES } from '../constants'

export default function SpeakerButton({
	result,
	toLanguage,
	fromText,
	loading,
}: {
	result: string
	toLanguage: Language
	fromText: string
	loading: boolean
}) {
	const utteranceLang = (lang: Language) => {
		const voiceLang = VOICE_LANGUAGES[lang]
		return voiceLang ? voiceLang : lang
	}

	const handleSpeak = () => {
		speechSynthesis.cancel()

		const splitText = result.match(/.{1,100}/g) || [result]

		const speakNext = (index: number) => {
			if (index >= splitText.length) return
			const utterance = new SpeechSynthesisUtterance(splitText[index])
			utterance.lang = utteranceLang(toLanguage)
			utterance.onend = () => speakNext(index + 1)
			speechSynthesis.speak(utterance)
		}

		speakNext(0)
	}

	return (
		<>
			<Button
				variant="link"
				style={{
					position: 'absolute',
					left: '40px',
					bottom: '0px',
					display: fromText && !loading ? 'block' : 'none',
				}}
				onClick={handleSpeak}
			>
				<SpeakerIcon title="Escuchar" />
			</Button>
		</>
	)
}
