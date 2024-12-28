import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { ArrowIcon } from './components/Icons'
import { AUTO_LANGUAGE } from './constants'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import TextArea from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'
import ClipboardButton from './components/ClipboardButton'
import SpeakerButton from './components/SpeakerButton'

function App() {
	const {
		loading,
		fromLanguage,
		toLanguage,
		setFromLanguage,
		setToLanguage,
		interchangeLanguages,
		fromText,
		result,
		setFromText,
		setResult,
	} = useStore()

	const debouncedFromText = useDebounce(fromText, 500)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await translate(
					debouncedFromText,
					fromLanguage,
					toLanguage,
				)
				if (data) setResult(data)
			} catch (error) {
				console.error('Error:', error)
			}
		}

		fetchData()
	}, [debouncedFromText, fromLanguage, toLanguage, setResult])

	return (
		<Container fluid>
			<Row className="py-3 text-center">
				<h1 style={{ fontSize: '26px' }}>Google Translate</h1>
			</Row>
			<Row>
				<Col>
					<Stack gap={2}>
						<LanguageSelector
							type={SectionType.FROM}
							value={fromLanguage}
							onChange={setFromLanguage}
						/>
						<div style={{ position: 'relative' }}>
							<TextArea
								type={SectionType.FROM}
								onChange={setFromText}
								value={fromText}
							/>
						</div>
					</Stack>
				</Col>
				<Col xs="auto">
					<Button
						disabled={fromLanguage === AUTO_LANGUAGE}
						variant="link"
						type="button"
						onClick={interchangeLanguages}
					>
						<ArrowIcon title="Cambiar idiomas" />
					</Button>
				</Col>
				<Col>
					<Stack gap={2}>
						<LanguageSelector
							type={SectionType.TO}
							onChange={setToLanguage}
							value={toLanguage}
						/>
						<div
							style={{
								position: 'relative',
							}}
						>
							<TextArea
								type={SectionType.TO}
								onChange={setResult}
								loading={loading}
								value={result}
							/>

							<ClipboardButton
								result={result}
								fromText={fromText}
								loading={loading}
							/>
							<SpeakerButton
								result={result}
								toLanguage={toLanguage}
								fromText={fromText}
								loading={loading}
							/>
						</div>
					</Stack>
				</Col>
			</Row>
		</Container>
	)
}

export default App
