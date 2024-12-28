import { Button, Overlay, Tooltip } from 'react-bootstrap'
import { ClipboardIcon } from './Icons'
import { useState, useRef } from 'react'

export default function ClipboardButton({
	fromText,
	result,
	loading,
}: { fromText: string; result: string; loading: boolean }) {
	const [showTooltip, setShowTooltip] = useState(false)
	const target = useRef(null)

	const handleChange = () => {
		navigator.clipboard.writeText(result)
		setShowTooltip(true)
		setTimeout(() => {
			setShowTooltip(false)
		}, 1000)
	}

	return (
		<>
			<Button
				variant="link"
				style={{
					position: 'absolute',
					left: '0px',
					bottom: '0px',
					display: fromText && !loading ? 'block' : 'none',
				}}
				onClick={handleChange}
				ref={target}
			>
				<ClipboardIcon title="Copiar" />
			</Button>
			<Overlay target={target.current} show={showTooltip} placement="bottom">
				{(props) => (
					<Tooltip id="overlay-example" {...props}>
						Text copied to clipboard!
					</Tooltip>
				)}
			</Overlay>
		</>
	)
}
