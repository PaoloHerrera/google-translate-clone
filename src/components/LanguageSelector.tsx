import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type LanguageSelectorProps =
	| {
			type: SectionType.FROM
			value: FromLanguage
			onChange: (language: FromLanguage) => void
	  }
	| {
			type: SectionType.TO
			value: Language
			onChange: (language: Language) => void
	  }

export default function LanguageSelector({
	onChange,
	type,
	value,
}: LanguageSelectorProps) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		type === SectionType.FROM
			? onChange(event.target.value as FromLanguage)
			: onChange(event.target.value as Language)
	}
	return (
		<Form.Select
			aria-label="Selecciona el idioma"
			onChange={handleChange}
			value={value}
		>
			{type === SectionType.FROM && (
				<option value={AUTO_LANGUAGE}>Detectar idioma</option>
			)}
			{Object.entries(SUPPORTED_LANGUAGES).map(([key, language]) => (
				<option value={key} key={key}>
					{language}
				</option>
			))}
		</Form.Select>
	)
}
