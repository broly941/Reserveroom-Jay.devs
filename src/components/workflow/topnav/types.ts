export interface TopNavMenuProps {
    username: string,
    logout: () => void,
    loadBookings: () => void,
    loadPeople: () => void,
    loadRooms: () => void,
}