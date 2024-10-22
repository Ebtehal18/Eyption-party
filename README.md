# jQuery Project: Sidebar Navigation, Countdown, and Form Validation

## Project Overview

This project demonstrates a dynamic webpage built using **jQuery**. It features a collapsible sidebar for easy navigation, a live countdown timer, a contact form with character limit validation, and a section for singer details that only reveals one singer's description at a time upon user interaction.

## Features

### 1. Sidebar Navigation
- The user can toggle a sidebar that slides in and out of view.
- Sidebar contains links for easy navigation to different sections of the page.
- The sidebar's width dynamically adjusts based on screen size (responsive behavior).

### 2. Countdown Timer
- A live countdown is displayed that updates every second.
- The countdown is based on a specific date (e.g., 30th October 2024).
- When the countdown reaches zero, it stops and displays `00 D`, `00 H`, `00 M`, `00 S`.

### 3. Form with Character Limit
- A form where the user can input a message with a character limit of 100.
- Real-time feedback shows how many characters are remaining.
- If the user exceeds the limit, a message appears warning that the character limit has been reached.

### 4. Singer Details Toggle
- A section featuring multiple singers where the user can view details of only one singer at a time.
- When the user clicks on a singer's name (heading), the corresponding details slide down while all other details are hidden.

## How It Works

### Sidebar
- The sidebar opens when the user clicks the "open" icon and closes when the user clicks the "close" button.
- The sidebar's position is animated using jQuery's `.animate()` method, and its width is dynamically adjusted based on the screen size using `.innerWidth()`.

### Countdown
- The countdown is updated every second using JavaScript's `setInterval()` function.
- It calculates the time difference between the current date and the specified target date, displaying the remaining days, hours, minutes, and seconds.

### Form Validation
- The form validates the message field with a character limit of 100.
- As the user types, the number of remaining characters is updated in real-time.
- If the character count exceeds the limit, a warning message is displayed.

### Singer Details Toggle
- Using jQuery's `.animate()` and `.slideUp()` methods, only one singer's details are visible at a time. Clicking on another singer hides the previous details.

## Technologies Used
- **HTML**: For structuring the content.
- **CSS**: For styling the webpage.
- **jQuery**: For dynamic interactions, animations, and DOM manipulation.
- **JavaScript**: For countdown functionality.
- ## Live Version
You can view the live version of this project at [Live Demo](https://ebtehal18.github.io/Eyption-party/).
