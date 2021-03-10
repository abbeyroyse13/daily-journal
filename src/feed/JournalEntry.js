export const entries = (journalObj) => {
    return `
        <article class="journal-card">
    <ul>
        <li class="date">${journalObj.date}</li>
        <li class="entry">${journalObj.entry}</li>
        <li class="concept">${journalObj.concept}</li>
        <li class="mood">${journalObj.mood}</li>
    </ul>
        </article>
    `
};