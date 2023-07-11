import { __ } from "@wordpress/i18n";
import { Button, PanelBody, ToggleControl } from "@wordpress/components";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

import "./editor.scss";

export default function edit(props) {
	const blockProps = useBlockProps({});

	const ALLOWED_BLOCKS = [
		"core/paragraph",
		"core/columns",
		"core/column",
		"core/heading",
	];
	const TEMPLATE = [
		[
			"core/columns",
			{},
			[
				[
					"core/column",
					{},
					[["core/heading", { level: 2, placeholder: "Transcript" }]],
				],
				["core/column", {}, [["core/button", { text: "Expand" }]]],
			],
		],
		["core/paragraph", { placeholder: "Add your transcript here." }],
	];

	const { attributes, setAttributes } = props;
	const { buttonText } = attributes;
	const { expandedTranscript, setExpandedTranscript } = useState(false);

	const expandTranscript = () => {
		console.log(expandedTranscript);
		setExpandedTranscript(true);
	};

	return (
		<div {...blockProps}>
			{/* <header className="transcription-header">
				<h3>Transcript</h3>
				<Button
					className="transcription-expand-button"
					onClick={expandTranscript}
				>
					{buttonText}
				</Button>
			</header>
			<div
				className={
					`transcription-text-box ` + expandedTranscript ? `hide` : null
				}
			> */}
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
			{/* </div> */}
		</div>
	);
}
