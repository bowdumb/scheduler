# Work Day Personal Planner
This Work Day Personal Planner is a calendar application that allows you to save events for each hour of the day, and displays colors for each hour that correspond with your local time.

Using starter-code as the base of this application, I have added my own code in order to enable functionality by using the Day.js libray to enable accurate tracking of local time, adjusting color schemes to correspond with the current time, and allowing the user to save their calendar events to local storage for reference throughout their day.

## Installation

This application has been deployed via GitHub Pages, and can be used by following the deployment link within this GitHub repository, or directly through this URL: https://github.com/claxCode/scheduler . Additionally, this application may be accessed by downloading the files locally and opening them within VSCode, or equivalent software.

## Functionality

When interacting with the application, the will take note of the different colors of each hourly time block. The color representation is as follows:

* Green = The hourly time block has yet to occur, and is in the future.
* Red = The user is currently within this hourly time block.
* Grey = The hour has passed and will remain grey until the next day begins.

Within each respective hourly time block there is a text-area with an input field that allows you to schedule your time by adding events to your planner with text. Simply click the field, and type! Once you have completed your entry, click on the floppy disk icon to save what you have written. Entries will be saved to local storage, and will remain in the application if the window is refreshed. To remove events, delete them manually with your keyboard, or clear your browser's local storage.

## Screenshots

### Mock-Up

![Mock-Up provided with codebase](/Assets/05-third-party-apis-homework-demo.gif)

### Final Product

![Finalized Code (taken before 9am)](/Assets/127.0.0.1_5500_index.html.png)

## Acknowledgements

Starter code provided by the Georgia Tech Full-Stack Coding Bootcamp and the edX team. Assist and support was provided by edX tutors and AskBCS Learning Assistants when tackling certain areas of friction.

## Usage

The rights to all code contained within belongs to their respective creators, though the product should be considered free for personal use.