# Little Lemon Restaurant Web App

**Your go-to online platform for delicious food and seamless table reservations!**

A responsive web application for the fictional Little Lemon restaurant, built as a Capstone project. It offers a delightful user experience for browsing our exquisite menu and effortlessly reserving a table online.

## 📝 **Note**

This is a demo application, so it only has limited functionality, such as home page, menu, and booking pages.

---

## 🚀 **Features**

-   **Responsive Design:** Flawlessly optimized for a consistent and enjoyable experience across all devices: mobile, tablet, and desktop.
-   **Table Reservation System:** A robust booking form featuring intuitive client-side validation to ensure accurate and smooth reservation requests.
-   **API Integration (Simulated):** Leverages a simulated API to dynamically fetch available time slots and process booking submissions, preparing the application for future backend integration.
-   **Advanced State Management:** Utilizes React's `useReducer` for complex state logic, particularly for managing dynamic available times, alongside `useState` for component-level state.
-   **Comprehensive Unit Tests:** Ensures application reliability and correctness with a suite of unit tests, covering critical components like the Booking Form validation and the Reducer's state transitions, powered by Vitest and React Testing Library.
-   **Enhanced Accessibility:** Built with semantic HTML5 tags and adheres to ARIA attributes best practices, providing an inclusive experience for all users, including those relying on assistive technologies.

---

## 🛠 **Tech Stack**

-   **Framework:** React + Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS (with Shadcn/ui components)
-   **Routing:** React Router DOM
-   **Testing:** Vitest + React Testing Library

---

## 📦 **Installation & Setup**

To get the Little Lemon Restaurant Web App up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/yourusername/little-lemon.git](https://github.com/yourusername/little-lemon.git)
    cd little-lemon
    ```

2.  **Install dependencies:**
    This project uses `pnpm` as its package manager.

    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```
    Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

---

## 🧪 **Testing**

The application includes comprehensive unit tests to ensure the reliability of critical functionalities.

1.  **Run Unit Tests:**
    To execute all tests, use the following command:
    ```bash
    pnpm run test
    ```
    This will run tests for components like the Booking Form validation and the Reducer logic.

---

## 📂 **Project Structure**

A brief overview of the project's key directories and files:

-   `public/`: Static assets (images, icons) and the `index.html` file.
-   `src/components/`: Reusable UI components.
-   `src/components/main/`: Core components for the main application layout and logic.
-   `src/components/ui/`: Shadcn/ui components (e.g., Button, Card).
-   `src/pages/`: Page-level components (e.g., BookingPage, ConfirmedBooking).
-   `src/utils/`: Utility functions, including the fake API simulation.
-   `src/__tests__/`: Unit tests for various components and logic.
-   `vite.config.ts`: Vite and Vitest configuration.
-   `tailwind.config.ts`: Tailwind CSS configuration.

---

## 🤝 **Contributing**

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

---

## 📄 **License**

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

## 👤 **Author**

evocation01
