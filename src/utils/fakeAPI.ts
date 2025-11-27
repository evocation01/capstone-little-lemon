// Helper to manage bookings in Local Storage to simulate a real backend

const STORAGE_KEY = "little-lemon-bookings";

interface Booking {
    date: string;
    time: string;
}

export const getBookedTimes = (date: string): string[] => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    const bookings: Booking[] = storedData ? JSON.parse(storedData) : [];

    // Return only the times booked for the specific date
    return bookings.filter((b) => b.date === date).map((b) => b.time);
};

export const addBooking = (date: string, time: string) => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    const bookings: Booking[] = storedData ? JSON.parse(storedData) : [];

    bookings.push({ date, time });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};
