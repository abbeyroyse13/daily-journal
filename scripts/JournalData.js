const journal = [
    {
        id: 1,
        date: "02/17/2021",
        concept: "Installs and Terminal",
        entry: "We installed everything needed for the program journey and learned some basics of our terminal.",
        mood: "Scared"
    },

    {
        id: 2,
        date: "02/18/2021",
        concept: "Flexbox",
        entry: "We went through some more basics and dove into some flexbox learning activities.",
        mood: "Decent"
    },

    {
        id: 3,
        date: "02/19/2021",
        concept: "Github",
        entry: "We learned how to navigate github and set up our first repository.",
        mood: "Nervous"
    },

    {
        id: 4,
        date: "02/28/2021",
        concept: "First Group Project (HTML/CSS)",
        entry: "We did our first group project using HTML & CSS, then demoed it for the class.",
        mood: "Happy"
    },

    {
        id: 5,
        date: "03/01/2021",
        concept: "Second Group Project (JavaScript)",
        entry: "We did our second group project using JavaScript and also demoed it for the class.",
        mood: "Happy"
    },

    {
        id: 6,
        date: "03/5/2021",
        concept: "Giffygram Program Using Json & Postman",
        entry: "We took a look into json & postman and started to learn the basics about those things.",
        mood: "STRESSED"
    }
];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const getJournalEntries = () => {
    return journalData
}

/* export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
} */