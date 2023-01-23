
const guestbookForm = document.querySelector("#guestbook-form")

if(guestbookForm) {
    guestbookForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const input = document.querySelector("#guestbook-name").value;
        addToGuestbook(input)
    })
} else {
    console.log("Failed to find form on page, guestbook functionality will not work correctly!")
}

function addToGuestbook(input) {
    const list = document.querySelector("#guestbook-entries")
    const entry = document.createElement("li")
    entry.innerText = input
    list.appendChild(entry)
}