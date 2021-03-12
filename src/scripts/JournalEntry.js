export const JournalEntry = () => {
    return `
    <form action="">

        <section class="main-items">
            <fieldset>
                <label for="myName">Abbey Royse</label>
            </fieldset>

            <fieldset>

                <label for="journalDate">Entry Date</label>
                <input type="date" name="journalDate" id="journalDate">

            </fieldset>

            <fieldset>
                <label for="mood-select">Choose a mood:</label>
                <select id="mood-select" name="moods">
                    <option value="">How are you feeling?</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <option value="lovely">Lovely</option>
                    <option value="scared">Scared</option>
                    <option value="stressed">STRESSED</option>
                    <option value="decent">Decent</option>
                    <option value="excited">Excited!!!</option>
                    <option value="nervous">Nervous</option>
                </select>
            </fieldset>

            <div class="button">
                <button>Record Journal Entry</button>
            </div>

        </section>

        <fieldset class="textBox">
            <label for="concepts-covered">Concepts Covered</label>
            <textarea id="concepts" name="concepts-covered" rows="5" cols="50" class="concepttext"></textarea>

            <label for="journal-entry">Journal Entry</label>
            <textarea id="entries" name="journal-entry" rows="20" cols="100" class="journaltext"></textarea>
        </fieldset>

        <div class="button2">
            <button>Edit</button>
        </div>

        <div class="button3">
            <button>Delete</button>
        </div>

    </form>

    <section id="JournalEntryList"></section>
        
    </main>`
}

export const showJournalEntry = () => {
    const selector = document.querySelector(".container");
    selector.innerHTML = JournalEntry();
};