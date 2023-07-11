import domReady from "@wordpress/dom-ready";
domReady(function () {
	const button = document.querySelector(
		".wp-block-create-block-transcription-block button"
	);

	const transcriptionBox = document.querySelector(".transcription-text-box");

	button.addEventListener("click", () => {
		if (transcriptionBox.classList.contains("hide")) {
			transcriptionBox.classList.remove("hide");
			button.innerHTML = "Contract Transcript";
		} else {
			transcriptionBox.classList.add("hide");
			button.innerHTML = "Expand Transcript";
		}
	});
});
