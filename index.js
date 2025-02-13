import contactsArr from "./contactsData.js"

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener("click", findMatchingContacts)
patternSearchInput.addEventListener('focus', (e) => e.target.value = "" )



function findMatchingContacts() {
    const foundContacts = contactsArr.filter(contact => {
        const inputValue = patternSearchInput.value.replace(/\b\w/g, (match) => match.toUpperCase())
        return contact.name.includes(inputValue)
    })
    displayContacts(foundContacts)
}

function displayContacts(contacts) {
    if(contacts.length > 0) {
       const contactsHTML = contacts.map(contact => {
       const {name, email, phone} = contact
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

// IIFE to run all contatcs display for the first time only
(() => {
    displayContacts(contactsArr)
})()