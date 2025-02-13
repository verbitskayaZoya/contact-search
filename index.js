import contactsArr from "./contactsData.js"

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener("click", findMatchingContacts)

function findMatchingContacts() {
    const foundContacts = contactsArr.filter(contact => {
        const inputValue = patternSearchInput.value.replace(/\b\w/g, (match) => match.toUpperCase())
        return contact.name.includes(inputValue)
    })
    displayFoundContacts(foundContacts)
}
function displayFoundContacts(foundContacts) {
    if(foundContacts.length > 0) {
       const contactsHTML = foundContacts.map(foundContact => {
       const {name, email, phone} = foundContact
            return `<aside class="contact-card"> 
                        <p> ${name} </p>
                        <p> ${email} </p>
                        <p> ${phone} </p>
                    </aside>`
        })
        contactDisplay.innerHTML = contactsHTML.join("")
    } else {
        contactDisplay.innerText = "Sorry, no contacts found"
    }
}

