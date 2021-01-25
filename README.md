# Project Overview

## Project Name
US Calendar

## Project Description
a calendar shows holidays

## API and Data Sample
https://calendarific.com/api/v2/holidays?&api_key=88e220d28b06a18d0148ed2a3bf3c6d5cebdb2aa&country=US&year=2021

response": {

    "holidays": [
      {
        "name": "New Year's Day",
        "description": "New Year's Day is the first day of the Gregorian calendar, which is widely used in many countries such as the USA.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2021-01-01",
          "datetime": {
            "year": 2021,
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

## Wireframes

https://wireframe.cc/N5VrpU

#### MVP 

1. display current month calendar
2. showing holidays on the calendar based on US calendar.
3. showing calendar by different month, year
4. highlight today
5. showing description of holiday as clicked


#### PostMVP  

- showing today's weather 
- sending a message if today===birthday
- have both select by specific year/month and change by next/previous working
- add todo to a specific day, and shows on description

## Second API

http://api.weatherstack.com/current?access_key=ab2da8ad6d64ac126f4804f73b9957e4&query=New%20York


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
    }

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval | Incomplete 
|Jan 27| HTML, JS- showing calendar,allowing change year & month,   | Incomplete
|Jan 28| CSS - style, flexbox or grid | Incomplete
|Jan 28| display description as clicked  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

https://wireframe.cc/2HqJqq
![Priority Matrix](https://res.cloudinary.com/lizhenwen727/image/upload/v1611618393/Screen_Shot_2021-01-25_at_6.42.12_PM_fevmlf.png)


## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|HTML | M | 2hr | ? | ? |
| CSS - color,border,size  | L | 3 hrs| ?hrs | ?hrs |
| CSS - flexbox or grid | H | 3hrs| ?hrs | ?hrs |
| CSS - adjust screen | H | 2hr | ? hrs | ? hrs|
| create current Calendar  using date object method | H | 2 hrs | ? | ? |
| insert data option for year & month JS| H | 3 hrs | ? | ? |
| change calender as to year, month | H | 3 hrs | ? | ? |
| Working with API to get holiday, description | H |  3 hrs| ?hrs | ?hrs |
| highlight today | H | 1 hrs | ? | ? |
| showing holidays | H | 3 hrs | ? | ? |
| display description | H | 2 hrs | ? | ? |
| enable next/previous buttons to change month| H | 3 hrs | ?hrs | ?hrs |
| display messages | H | 3 hrs | ? hrs | ? hrs |
| add weather API  & enable button function| H | 3 hrs | ? hrs | ? hrs |
| showing weather based on NY | H | 3 hrs | ? hrs | ? hrs |
| Total | H | 40hrs| ?hrs | ?hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
