import { getBookedTimes } from "../../utils/fakeAPI";

export const updateTimes = (
    state: string[],
    action: { type: string; date: string }
) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            const dateObj = new Date(action.date);
            // 1. Get all technically available slots from the Mock API
            const allSlots = window.fetchAPI(dateObj);

            // 2. Get slots that are already booked from Local Storage
            const bookedSlots = getBookedTimes(action.date);

            // 3. Filter out the booked slots
            return allSlots.filter((slot) => !bookedSlots.includes(slot));

        default:
            return state;
    }
};

export const initializeTimes = () => {
    const today = new Date();
    // Format today as YYYY-MM-DD to match input values
    const dateString = today.toISOString().split("T")[0];

    const allSlots = window.fetchAPI(today);
    const bookedSlots = getBookedTimes(dateString);

    return allSlots.filter((slot) => !bookedSlots.includes(slot));
};
