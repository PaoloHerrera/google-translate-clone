import { FormControl } from 'react-bootstrap'
import { SectionType } from '../types.d'
import './TextArea.css'

enum TextAreaInitialValue {
	FROM = 'Escribe o pega el texto aquí',
	TO = 'Traducción',
}

interface TextAreaProps {
	type: SectionType
	loading?: boolean
	value: string
	onChange: (text: string) => void
}

export default function TextArea({
	type,
	loading,
	value,
	onChange,
}: TextAreaProps) {
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event.target.value)
	}

	return (
		<>
			<FormControl
				placeholder={type === SectionType.FROM ? TextAreaInitialValue.FROM : ''}
				autoFocus={type === SectionType.FROM}
				readOnly={type === SectionType.TO}
				value={type === SectionType.TO && loading ? 'Traduciendo...' : value}
				onChange={handleChange}
				as="textarea"
				className={`translate-area ${type === SectionType.FROM ? 'from' : 'to'}`}
				style={{ paddingBottom: '60px' }}
			/>
		</>
	)
}
