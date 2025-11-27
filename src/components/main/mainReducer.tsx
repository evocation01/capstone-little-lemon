// This file holds the pure logic, separating it from the component to satisfy Fast Refresh
export const updateTimes = (
    state: string[],
    action: { type: string; date: string }
) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            // For now, return the same times
            return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        default:
            return state;
    }
};

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};
