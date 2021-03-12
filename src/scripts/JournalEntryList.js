import { entries } from "./Journal.js"

export const JournalEntryList = (allEntries) => {
    let journalHTMLRep = "";

     for (const journalObj of allEntries) {

         journalHTMLRep += entries(journalObj);
     };
    return journalHTMLRep;

};