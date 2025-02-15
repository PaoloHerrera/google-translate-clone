export const ArrowIcon = ({ title }: { title: string }) => (
	<svg
		focusable="false"
		width="24"
		height="24"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<title>{title}</title>
		<path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
	</svg>
)

export const ClipboardIcon = ({ title }: { title: string }) => (
	<svg
		focusable="false"
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		viewBox="0 0 24 24"
		width="24"
	>
		<title>{title}</title>
		<g>
			<rect fill="none" height="24" width="24" />
		</g>
		<g>
			<path d="M16,20H5V6H3v14c0,1.1,0.9,2,2,2h11V20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9 C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z" />
		</g>
	</svg>
)

export const SpeakerIcon = ({ title }: { title: string }) => (
	<svg
		focusable="false"
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		width="24"
		viewBox="0 0 24 24"
	>
		<title>{title}</title>
		<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
	</svg>
)

export const VoiceIcon = ({ title }: { title: string }) => (
	<svg
		focusable="false"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		height="24"
		width="24"
	>
		<title>{title}</title>
		<path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
	</svg>
)
