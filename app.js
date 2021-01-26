let today = new Date()
let currentYear = today.getFullYear(); //2021
let currentDay = today.getDay() //tuesday the calendar starts sunday=0
let currentDate = today.getDate() //26
let currentMonth = today.getMonth() + 1 //month start index 0; 
console.log(today, currentYear, currentDate, currentDay, currentMonth)
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

//enable options
let form = document.querySelector("#year-month-submission")
form.addEventListener('change', (e) => {
  e.preventDefault();
  let selectYear = document.querySelector("#select-year").value
  console.log(selectYear)
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
let showHeader = document.querySelector(".display-header")

function displayMonthYear() {
  let selectYear = document.querySelector("#select-year").value
  let selectMonth = document.querySelector("#select-month").value
  let header = document.createElement("header")
  header.setAttribute("class", "display-month-year")
  header.innerText = `${selectMonth} ${selectYear}`
  // console.log(header)
  showHeader.append(header)
  return showHeader
}

//create a calendar body 
function createCalendar(year, month) {
  //where the first of month start in the week
  let firstDayofMonth = new Date(year, month, 1).getDay() //weeks starts index=0 and sunday=0 
  let monthTest = new Date(year, month, 1).getMonth() // here month index start 1;
  console.log(monthTest)
  // console.log(firstDayofMonth)
  let totalDaysinMonth = new Date(year, month, 0).getDate()
  console.log(totalDaysinMonth)
  //inital looking on option and header showing month & year.
  let selectYear = document.querySelector("#select-year")
  let selectMonth = document.querySelector("#select-month")
  selectYear.value = year;
  selectMonth.value = months[month - 1]
  showHeader.innerText = `${months[month-1]} ${year}` //arr starts with index 0
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
          // console.log(td)
          //  console.log(day === currentDay && month === currentMonth && year === currentYear)
        }
        td.innerText = day;
        tr.append(td)

        day++; //increment day
      }
    }
    calendarBody.append(tr) //insert row into calendar body
  }
  return calendarBody;
}

console.log(createCalendar(currentYear, currentMonth))