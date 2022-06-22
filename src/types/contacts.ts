export interface Contact {
    recordID: string,
    familyName?: string;
    givenName: string;
    hasThumbnail: boolean;
    thumbnailPath?: string;
    jobTitle?: string
}



export interface ContactsContextType {
    contacts: Contact[],
    addToList: (contact: Contact) => void;
    removeFromList: (id: string) => void;
    selectedContacts?: Contact[],
    isContactSelected: (id: string) => boolean | any;
    onSearch: (text: string) => void
}