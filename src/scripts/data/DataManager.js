let journalEntries = []; 

export const usejournalEntries = () => {
    return [...journalEntries];
}

export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedResponse => {

        const sortByDate = parsedResponse.sort(
            (newEntry, nextEntry) => 
                Date.parse(nextEntry.date) - Date.parse(newEntry.date)
        )
        journalEntries = sortByDate;
        return sortByDate;
    })
};

export const createNewEntry = (journalObj) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObj)
  
    })
        .then(response => response.json())
  };