import { beforeEach, describe, expect, test, vi } from "vitest";
import { initializeTimes, updateTimes } from "../mainReducer";

describe("Main Component Reducer", () => {
    // Step 1: Setup the mock for window.fetchAPI before each test
    beforeEach(() => {
        // We define a mock implementation that returns a consistent array of times
        // regardless of the date passed in, to ensure predictable tests.
        window.fetchAPI = vi.fn(() => [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ]);
    });

    test("initializeTimes returns the correct expected value from API", () => {
        // This function now internally calls window.fetchAPI(today)
        const result = initializeTimes();

        // We expect it to match the array returned by our mock
        const expectedTimes = [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];

        expect(result).toHaveLength(6);
        expect(result).toEqual(expectedTimes);
    });

    test("updateTimes returns the available times based on selected date", () => {
        const state = ["17:00"]; // Initial state
        const action = { type: "UPDATE_TIMES", date: "2023-11-20" };

        // This function now internally calls window.fetchAPI(date)
        const result = updateTimes(state, action);

        const expectedTimes = [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];

        expect(result).toEqual(expectedTimes);

        // Optional: Verify the mock was actually called
        expect(window.fetchAPI).toHaveBeenCalled();
    });
});
