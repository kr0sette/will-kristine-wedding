import { db } from "../firebase";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

//Collection Types: email-updates& rsvp
const LIST_TYPE = {
    EMAIL_UPDATES: "email-updates",
    RSVP: "rsvp"
}

//Interfaces
interface emailUpdatesGuestData {
    name: string
    email: string
}

//Utility functions
const cleanupEmailGuestData = (guest: emailUpdatesGuestData) => {
    guest.name = guest.name.trim();
    guest.email = guest.email.trim();

    const cleanedGuest = {
        ...guest,
        dateCreated: serverTimestamp()
    }
    return cleanedGuest;
}

//References to collections/lists
// const emailUpdatesList = collection(db, LIST_TYPE.EMAIL_UPDATES);
// const rsvpList = collection(db, LIST_TYPE.RSVP);

// Get List (Collection)

// Get Guest (Document)
export const getEmailUpdatesGuest = async(guest: emailUpdatesGuestData) => {
    const guestRef = doc (db, LIST_TYPE.EMAIL_UPDATES, guest.email);
    const guestSnapshot = await getDoc(guestRef);
    if (guestSnapshot.exists()) {
        return guestSnapshot.data();
    } else {
        return null;
    }
}


// Set Guest
export const addEmailUpdatesGuest = async(newGuest: emailUpdatesGuestData) => {

    const guestExists = await getEmailUpdatesGuest(newGuest);
    if (guestExists) {
        return "already-exists";
    }

    const cleanedNewGuest = cleanupEmailGuestData(newGuest);
    const guestRef = doc (db, LIST_TYPE.EMAIL_UPDATES, cleanedNewGuest.email);
    await setDoc(guestRef, cleanedNewGuest);

    return "success";

}


// Update Guest