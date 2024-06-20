document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    // initialView: 'dayGridMonth',
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    dateClick: function(info) {
      // alert('clicked ' + info.dateStr);
      // alert('clicked' + '클릭 / 단 1개를 클릭할 경우에는 드래그로 인식해서 selected 나오고 clicked 나옴');
    },
    select: function(info) {
      // alert('selected ' + info.startStr + ' to ' + info.endStr);
      // alert('selected ' + '드래그');
    },
    windowResize: function(arg) {
      // alert('The calendar has adjusted to a window resize. Current view: ' + arg.view.type);
    }
  });

  calendar.render();
});

