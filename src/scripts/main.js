console.log("hello are you there");

import { getJournalEntries, usejournalEntries, createNewEntry, deletePost } from "./data/DataManager.js"
import { JournalEntryList } from "./JournalEntryList.js"
import { NavBar } from "./nav/NavBar.js"

getJournalEntries();

const applicationElement = document.querySelector(".dailyjournal");

applicationElement.addEventListener("click", event => {
    if (event.target.id === "Entries") {
        console.log("You clicked on entries")
    }
})

applicationElement.addEventListener("click", event => {
    if (event.target.id === "journalpng") {
        console.log("Welcome home!")
    }
})

applicationElement.addEventListener("click", event => {
        if (event.target.id === "Entries") {
            //clear the input fields
        }
    })
    // this probably needs more tweaking soon 
applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        //collect the input values into an object to post to the DB
        const title = document.querySelector("input[name='postTitle']").value
        const url = document.querySelector("input[name='postURL']").value
        const description = document.querySelector("textarea[name='postDescription']").value
            //we have not created a user yet - for now, we will hard code `1`.
            //we can add the current time as well
        const postObject = {
            title: title,
            imageURL: url,
            description: description,
            userId: usejournalEntries().id,
            timestamp: Date.now()
        }

        // be sure to import from the DataManager
        createNewEntry(postObject);
    }
})

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
        const entriesId = event.target.id.split("__")[1];
        deletePost(entriesId)
            .then(response => {
                showPostList();
            })
    }
})

const showJournalEntryList = () => {
    const entryElement = document.querySelector("#JournalEntryList");
    getJournalEntries().then((allEntries) => {
        entryElement.innerHTML = JournalEntryList(allEntries);
    })
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
    navElement.innerHTML = NavBar();
}

const startJournal = () => {
    showJournalEntryList();
    showNavBar();
}

startJournal();