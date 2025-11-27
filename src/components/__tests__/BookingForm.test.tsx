import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
    // Helper to render component with required mocks
    const renderBookingForm = () => {
        const availableTimes = ["17:00", "18:00"];
        const dispatch = vi.fn();
        const submitForm = vi.fn();
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        );
        return { submitForm, dispatch };
    };

    test("Renders the Choose date label", () => {
        renderBookingForm();
        const labelElement = screen.getByText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });

    // --- Step 1: HTML5 Validation Tests ---

    test("Date input has HTML5 validation attributes", () => {
        renderBookingForm();
        const dateInput = screen.getByLabelText(/Choose date/i);
        expect(dateInput).toHaveAttribute("required");
        expect(dateInput).toHaveAttribute("type", "date");
    });

    test("Time select has HTML5 validation attributes", () => {
        renderBookingForm();
        const timeSelect = screen.getByLabelText(/Choose time/i);
        expect(timeSelect).toHaveAttribute("required");
    });

    test("Guests input has HTML5 validation attributes", () => {
        renderBookingForm();
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        expect(guestsInput).toHaveAttribute("required");
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");
        expect(guestsInput).toHaveAttribute("type", "number");
    });

    test("Occasion select has HTML5 validation attributes", () => {
        renderBookingForm();
        const occasionSelect = screen.getByLabelText(/Occasion/i);
        expect(occasionSelect).toHaveAttribute("required");
    });

    // --- Step 2: JavaScript Validation Tests (Button State) ---

    test("Submit button is disabled when date is empty (Invalid state)", () => {
        renderBookingForm();

        // Date is empty by default in the component state
        const submitButton = screen.getByRole("button");

        expect(submitButton).toBeDisabled();
    });

    test("Submit button is enabled when all fields are valid (Valid state)", () => {
        renderBookingForm();

        const dateInput = screen.getByLabelText(/Choose date/i);
        const submitButton = screen.getByRole("button");

        // Simulate user selecting a date (other fields have valid defaults)
        fireEvent.change(dateInput, { target: { value: "2023-11-20" } });

        // Now the form should be valid
        expect(submitButton).not.toBeDisabled();
    });

    test("Submit button is disabled if guests number is invalid", () => {
        renderBookingForm();

        const dateInput = screen.getByLabelText(/Choose date/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const submitButton = screen.getByRole("button");

        // Make date valid first
        fireEvent.change(dateInput, { target: { value: "2023-11-20" } });

        // Now make guests invalid (too low)
        // Note: HTML input type="number" might prevent typing non-numbers,
        // but react state allows us to set values to verify logic
        fireEvent.change(guestsInput, { target: { value: "0" } });

        expect(submitButton).toBeDisabled();

        // Make guests invalid (too high)
        fireEvent.change(guestsInput, { target: { value: "11" } });
        expect(submitButton).toBeDisabled();
    });
});
