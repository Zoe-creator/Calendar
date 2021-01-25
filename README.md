# Project Overview

## Project Name
Calendar

## Project Description
display a correct calendar as changed corresponding to year,month ,date,and day, also display holidays.

## API and Data Sample
https://calendarific.com/api/v2

[
      {
         "name": "New Year's Day",
        "description": "New Year's Day is the first day of the Gregorian calendar, which is widely used in many countries such as the USA.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2019-01-01",
          "datetime": {
            "year": 2019,
            "month": 1,
            "day": 1
          }
        },
        "type": [
          "National holiday"
        ],
        "locations": "All",
        "states": "All"
      },
      {
        "name": "World Braille Day",
        "description": "World Braille Day celebrates the life and achievements of Louis Braille, who invented the braille code for the visually impaired.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2019-01-04",
          "datetime": {
            "year": 2019,
            "month": 1,
            "day": 4
          }
        },
        "type": [
          "Worldwide observance"
        ],
        "locations": "All",
        "states": "All"
      }


## Wireframes

https://wireframe.cc/N5VrpU

#### MVP 

1. display correct calendar as changed corresponding to its day, year, month 
2. showing holidays on the calendar based on US calendar.
3. allowing change by next/previous, or select by specific year/month.
4.highlight today,


#### PostMVP  

- showing today's weather 
- sending a message if today===birthday
- Allow user to choose favorites 
-display weather
-have both select by specific year/month and change by next/previous working
-showing diffrent countries holidays on calendar.
-add todo to a specific day,

## Second API

https://api.weatherstack.com/...

current: {
    "observation_time": "05:27 PM",
    "temperature": 1,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Sunny"
    ],
		"request": {
    "type": "City",
    "query": "New York",
    "language": "en",
    "unit": "m"
  },

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval | Incomplete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Initial Clickable Model  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete



## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|HTML | H | 1hr | ? | ? |
| CSS | H | 6hrs| ?hrs | ?hrs |
|create Calendar | H | 3 hrs | ? | ? |
| change display of calenday as corresponding to year, month | H | 5 hrs | ? | ? |
| Working with API | H | 3hrs| ?hrs | ?hrs |
| display messages | H | 3 hrs | ? hrs | ? hrs |
| add weather | H | 6 hrs | ? hrs | ? hrs |
| Total | H | 19hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
