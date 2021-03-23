export const NavBar = (navObj) => {
    return `
<header>
        <nav class="navbar">
            <img id="journalpng" src="./images/journal.png" alt="logo">
            <h2>Abbey's Daily Journal</h2>
            <button id="Entries" class="fakeLink">Entries</button>
            <button id="edit__${navObj.id}">Edit</button>
            <button id="delete__${navObj.id}">Delete</button>
        </nav>
    </header>

    <main class="dailyjournal">

<section class="JournalEntryList"></section>
`
}