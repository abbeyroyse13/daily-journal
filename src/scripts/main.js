//import { getJournalEntries } from "./data/DataManager.js"
import { JournalEntryList } from "./feed/JournalEntryList.js"

JournalEntryList();
//getJournalEntries(); 

const showJournalEntryList = () => {
    const postElement = document.querySelector(".JournalEntryList");
      getPosts().then((allEntries) => {
          postElement.innerHTML = PostList(allEntries);
      })
  }

  const startJournal = () => {
      showJournalEntryList();
  }

  startJournal();