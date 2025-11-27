import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
// Import path updated to go up one level
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
    test("Renders the Choose date label", () => {
        // Mock the props required by the component
        const availableTimes = ["17:00", "18:00"];
        const dispatch = vi.fn();

        render(
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        );

        // Check for static text
        const labelElement = screen.getByText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });

    test("Renders the submit button", () => {
        const availableTimes = ["17:00"];
        const dispatch = vi.fn();

        render(
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        );

        const buttonElement = screen.getByText("Make Your reservation");
        expect(buttonElement).toBeInTheDocument();
    });
});
