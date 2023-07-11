import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

export default function save(props) {
	const blockProps = useBlockProps.save();
	const { attributes } = props;
	const { buttonText } = attributes;
	const classes = `transcription-text-box hide`;

	return (
		<div {...blockProps}>
			{/* <header className="transcription-header">
				<h3>Transcript</h3>
				<button className="transcription-expand-button">{buttonText}</button>
			</header>
			<div className={classes}> */}
			<InnerBlocks.Content />
			{/* </div> */}
		</div>
	);
}
