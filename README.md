# Project Overview

## Project Name
US Calendar

## Project Description
a calendar shows holidays

## API and Data Sample
https://calendarific.com/api/v2/holidays?&api_key=88e220d28b06a18d0148ed2a3bf3c6d5cebdb2aa&country=US&year=2021
```
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
```

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
- add todo to a specific day, and shows on description

## Second API

http://api.weatherstack.com/current?access_key=ab2da8ad6d64ac126f4804f73b9957e4&query=New%20York

```
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
```

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|Jan 26| Project Approval | complete 
|Jan 27| HTML, JS- showing calendar,allowing change year & month,   | complete
|Jan 28| CSS - style, flexbox or grid | complete
|Jan 28| display description as clicked  | complete
|Jan 29| MVP | complete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

https://wireframe.cc/2HqJqq
![Priority Matrix](https://res.cloudinary.com/lizhenwen727/image/upload/v1611618653/Screen_Shot_2021-01-25_at_6.50.18_PM_ljeuii.png)


## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|HTML | M | 2hr | 1hr | 1hr |
| CSS - color,border,size  | L | 3 hrs| 3hrs | 3hrs |
| CSS - flexbox or grid | H | 3hrs| 2hrs | 2hrs |
| CSS - adjust screen | H | 2hr | 2 hrs | 2 hrs|
| create current Calendar  using date object method | H | 2 hrs | 1hr  | hr |
| insert data option for year & month JS| H | 3 hrs | .5hr | .5hr |
| change calender as to year, month | H | 3 hrs | .5hr | .5hr |
| Working with API to get holiday, description | H |  3 hrs| 1hrs | 1hrs |
| highlight today | H | 1 hrs | .5hr | .5hr |
| showing holidays to its date | H | 3 hrs | 12hr | 12hr |
| display description | H | 2 hrs | .5hr | .5hr |
\| add weather API  & enable button function| H | 3 hrs | 1 hrs | 1 hrs |
| showing weather based on NY | H | 3 hrs | .5 hrs | .5 hrs |
| showing weather by zipcode -added| H |  did not think to do it | 1 hrs | 1 hrs |
| Total | H | 42hrs| 26.5hrs | 26.5hrs |

## Code Snippet

use nested for loop to create each day with diffrent days in each cell. the day has to increment 

```
let day = 1; //everymonth start day=1
  //loop to create row/data 
  let calendarBody = document.querySelector('#calendar-body')
  for (let i = 0; i < 7; i++) {
    let tr = document.createElement("tr") //create row
    tr.setAttribute("class", "calendar-row")
    for (let z = 0; z < 7; z++) { //seven days a week
      //on the first row, indicate first day of month start in week
      //empty html element
      if (i === 0 && z < firstDayofMonth) {
        let td = document.createElement("td")
        td.innerText = ""
        tr.append(td) ////each row should have data with empty date
      } else {
        if (day > totalDaysinMonth) { //loop stop when reach to total days
          break;
        }
        let td = document.createElement("td")
        //highlight today;
        if (day === currentDate && month === currentMonth && year === currentYear) {
          td.setAttribute("class", "itstoday")
        }
        td.innerText += day;
        tr.append(td)
        day++; //increment day
      }
    }
    calendarBody.append(tr) //insert row into calendar body
  }
  return calendarBody;
}
```

## Change Log
display weather, and its location. allow user to find out weather by searching zip code
