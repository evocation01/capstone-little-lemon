import { describe, expect, test } from "vitest";
// Import path updated to point to the new reducer file
import { initializeTimes, updateTimes } from "../mainReducer";

describe("Main Component Reducer", () => {
    test("initializeTimes returns the correct expected value", () => {
        const expectedTimes = [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];
        const result = initializeTimes();

        expect(result).toHaveLength(6);
        expect(result).toEqual(expectedTimes);
    });

    test("updateTimes returns the same value that is provided in the state", () => {
        const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const action = { type: "UPDATE_TIMES", date: "2023-11-20" };

        const result = updateTimes(state, action);

        expect(result).toEqual([
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ]);
    });
});
