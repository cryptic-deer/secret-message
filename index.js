document.querySelector("form").addEventListener("submit", event => {
	event.preventDefault();

	//hiding the submitted form and showing the link
	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#link-form").classList.remove("hide");

	//encrypting the message
	const input = document.querySelector("#message-input");
	const encrypted = btoa(input.value);

	//creating the link from the encrytion and pre-selecting it for the user
	const linkInput = document.querySelector("#link-input");
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});

//showing the message from the link
const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#message-show").classList.remove("hide");

	document.querySelector("h1").innerHTML = message;
}
