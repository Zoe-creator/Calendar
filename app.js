let today = new Date()
let currentYear = today.getFullYear(); 
let currentDay = today.getDay() 
let currentDate = today.getDate() 
let currentMonth = today.getMonth() + 1 
let birthMonth = 7;
let birthDay = 27;


//fetch holiday data
const getHoliday = async (year) => {
  try {
    let apikey = "2ac15af74ee6214e9dc9f38a93c8089516ac9c3a"
    let getdata = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=${apikey}&country=US&year=${year}`)
    let holidays = getdata.data.response.holidays
    getValue(holidays)
  } catch (error) {
    console.log(error)
  }
}

function getValue(holidays) {
  let selectMonth = document.querySelector("#select-month").value
  let neededData = holidays.map(holiday => {
    let obj = {}
    obj["name"] = holiday.name
    obj["fulldate"] = holiday.date.iso
    obj["year"] = holiday.date.datetime.year
    obj["month"] = holiday.date.datetime.month
    obj["day"] = holiday.date.datetime.day
    obj["description"] = holiday.description
    return obj
  })


  // add holiday name into the calendar
  let td = document.querySelectorAll("td")
  let selectYear = document.querySelector("#select-year").value

  td.forEach(day => {
    neededData.forEach(holiday => {


      //check if the condition meets.
      if (day.innerText == birthDay && months.indexOf(selectMonth) + 1 == birthMonth) {

        let p = document.createElement('p')
        p.innerText = "Happy Birthday"
        day.append(p)
      }
      if (holiday.month == months.indexOf(selectMonth) + 1 && selectYear == holiday.year && day.innerText == holiday.day) {
        let p = document.createElement('p')
        p.innerText = holiday.name
        p.setAttribute("class", "holiday-name")
        day.append(p)


        //when the cell has holiday being clicked. show description
        day.addEventListener("click", function showDecription(e) {

          let list = document.querySelector(".description")
          list.innerHTML = ""
          if (e.target.hasAttribute("class")) {
            let ol = document.createElement("div")
            ol = `<h1 class="holiday-date"> <strong> ${holiday.fulldate} </strong> </h1>
                <p class= "holidayname"> ${holiday.name}</p>
                <p class = "holiday-description"> ${holiday.description}</p>
                `
            list.insertAdjacentHTML("beforeend", ol)
          }
        })
      }
    })

  })
}


//fetch weather data
const getWeather = async (zipcode) => {
  try {

    let getdata = await axios.get(`http://api.weatherstack.com/current?access_key=ab2da8ad6d64ac126f4804f73b9957e4&query=${zipcode}`)
    const weatherImage = getdata.data.current["weather_icons"][0]
    const weathdescription = getdata.data.current["weather_descriptions"][0]
    const location = getdata.data.location.name
    const temp = getdata.data.current.temperature
    const tempF = (temp * 9 / 5) + 32
    return showWeather(weatherImage, weathdescription, location, tempF)
  } catch (error) {
    console.log(error)
  }
}

function showWeather(picture, weathdescription, location, temp) {

  let weather = document.querySelector(".weather")
  weather.innerHTML = ""
  let img = document.createElement("img")
  img.setAttribute("src", picture)

  weather.append(img)

  let p = document.createElement('p')
  p.setAttribute("class", "WeatherMessage")
  p.innerHTML = `Hi, Current Weather in ${location} is ${weathdescription} and ${temp}°F `
  weather.append(p)

}
// //get input
const getZip = () => {

  let zipcode = document.querySelector('#zipcode')
  getWeather(zipcode.value)
}
const seachButton = document.querySelector('#search')
seachButton.addEventListener('click', getZip)

//add option to pick up a year
let optionYear = document.querySelector('#select-year')
for (let i = 2025; i >= 2000; i--) {
  let option = document.createElement("option")
  option.value = i;
  option.innerText = i;
  optionYear.append(option)
}
let months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//add options to pick up a month
let optionMonth = document.querySelector('#select-month')
for (let i = 0; i < months.length; i++) {
  let option = document.createElement('option')
  option.value = months[i]
  option.innerText = months[i]
  optionMonth.append(option)
}

function changeBody(month) {
  let body = document.querySelector("body")
  let headerColor = document.querySelector(".display-header")
  switch (month) {
    case 1:
    case 2:
    case 3:
      body.style.backgroundImage = "linear-gradient(to top, rgb(255, 255, 255), rgb(255,153,255))";
      headerColor.style.color = "rgb(250, 60, 205)"
      break;
    case 4:
    case 5:
    case 6:
      body.style.backgroundImage = "linear-gradient(to top, rgb(200,249,213), rgb(102,255,178))";
      headerColor.style.color = "rgb(0,102,204)"
      break;
    case 7:
    case 8:
    case 9:
      body.style.backgroundImage = "linear-gradient(to top, rgb(255,255,51), rgb(249,236,200))";
      headerColor.style.color = "rgb(230, 100, 100)"
      break;
    default:
      body.style.backgroundImage = "linear-gradient(to top, rgb(255,153,153), rgb(204,255,229))";
      headerColor.style.color = "rgb(250, 20, 10)"
  }
}

//enable options
let form = document.querySelector("#year-month-submission")
form.addEventListener('change', (e) => {
  e.preventDefault();
  let selectYear = document.querySelector("#select-year").value
  let selectMonth = document.querySelector("#select-month").value
  let monthIndex = months.indexOf(selectMonth) + 1
  createCalendar(selectYear, monthIndex)

})


//clear calendar each time;
const clearCalendar = () => {
  let calendarBody = document.querySelector('#calendar-body')
  while (calendarBody.lastChild) {
    calendarBody.removeChild(calendarBody.lastChild)
  }
}

// display month,year above the calender
function displayMonthYear(year, month) {
  let showHeader = document.querySelector(".display-header")
  let selectYear = document.querySelector("#select-year")
  let selectMonth = document.querySelector("#select-month")
  selectYear.value = year;
  selectMonth.value = months[month - 1]
  showHeader.innerText = `${months[month-1]} ${year}` //arr starts with index 0
  getHoliday(year)
  return showHeader
}

//create a calendar body 
function createCalendar(year, month) {
  //where the first of month start in the week
  let firstDayofMonth = new Date(year, month - 1, 1).getDay() //weeks starts index=0 and sunday=0 
 
  let totalDaysinMonth = new Date(year, month, 0).getDate()
  changeBody(month)

  displayMonthYear(year, month)

  clearCalendar()

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

//change  page body colors based on its season.
function changeBody(month) {
  let body = document.querySelector("body")
  let headerColor = document.querySelector(".display-header")
  switch (month) {
    case 1:
    case 2:
    case 3:
      body.style.backgroundImage = "linear-gradient(to top, rgb(255, 255, 255), rgb(255,153,255))";
      headerColor.style.color = "rgb(250, 60, 205)"
      break;
    case 4:
    case 5:
    case 6:
      body.style.backgroundImage = "linear-gradient(to top, rgb(200,249,213), rgb(102,255,178))";
      headerColor.style.color = "rgb(0,102,204)"
      break;
    case 7:
    case 8:
    case 9:
      body.style.backgroundImage = "linear-gradient(to top, rgb(255,255,51), rgb(249,236,200))";
      headerColor.style.color = "rgb(230, 100, 100)"
      break;
    default:
      body.style.backgroundImage = "linear-gradient(to top, rgb(255,153,153), rgb(204,255,229))";
      headerColor.style.color = "rgb(250, 20, 10)"
  }
}

createCalendar(currentYear, currentMonth)