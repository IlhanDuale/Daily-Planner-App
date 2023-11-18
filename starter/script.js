// # Third-Party APIs: Work Day Scheduler

// ## Your Task

// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// string, number, array, object, boolean
// You'll need to use the [Day.js](https://day.js.org/docs/en/display/format) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.
// console.log("hellow")
// console.log(5)
// console.log(true)
// console.log([])
// console.log({})
// console.log(time)
// ## User Story

// ```md
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// The app should:
var timeSlots = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
]

function saveTask() {
    console.log($(this))
        // get something unique to use as the key for every button (dom traversal)
        //get the value to save (what is written in the input textArea
        //save that to local stroage
    var uniqueKey = $(this).siblings('h2').text().trim();
    var taskDescription = $(this).siblings('textarea').val();
    localStorage.setItem(uniqueKey, taskDescription);
}

function createElement() {
    for (let i = 0; i < timeSlots.length; i++) {
        var section = $('<section>')
        var timeBlock = $('<h2>').text(timeSlots[i])
        var textArea = $('<textarea>')
        var button = $('<button>').text("Save")
        button.click(saveTask)
        section.append(timeBlock)
        section.append(textArea)
        section.append(button)
        $(".container").append(section)
    }
}

// only strings and functions can be added to jquery elements

// function can be added to jquery elements
// * Display the current day at the top of the calender when a user opens the planner.

// * Present timeblocks for standard business hours when the user scrolls down.

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page