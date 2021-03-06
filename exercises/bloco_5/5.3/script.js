function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  window.onload = function () {
      
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let dayToInsert = document.querySelector('#days');
        let day = document.createElement('li');
        day.className = 'day';
        day.innerText = dezDaysList[i];
        dayToInsert.appendChild(day);
        
        if (dezDaysList[i] == '24' || dezDaysList[i] == '25' || dezDaysList[i] == '31') {
            day.className = 'day holiday';
        }
        if (dezDaysList[i] == '4' || dezDaysList[i] == '11' || dezDaysList[i] == '18' || dezDaysList[i] == '25') {
            day.className = 'day holiday friday';
        }
    }

createHolidayButton('Feriados');

};

function createHolidayButton(string) {
    let holidayBtnLocation = document.querySelector('.buttons-container');
    let holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    holidayButton.innerText = string;
    holidayBtnLocation.appendChild(holidayButton);
}

function holidayEvent() {
    let clickEvent = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    clickEvent.addEventListener('click', function (){

        for (let i = 0; i < holidays.length; i += 1) {
            if(holidays[i].style.backgroundColor === 'rgb (238, 238, 238') {
                holidays[i].style.backgroundColor = 'green';
            } else {
                holidays[i].style.backgroundColor = 'rgb (238, 238, 238';
            }
        }
    })
}
