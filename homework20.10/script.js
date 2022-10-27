function getWeek (){
    let day = new Date
    alert (day.getDay())
}
function getWeekDate (){
    let days = ['Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'П`ятниця',
    'Субота']
      let d = new Date();
      let n = d.getDay();
      alert(days[n])
}
function getTimeStamp (){
    
    let day = new Date
    let Seconds = day.getSeconds
    let minute = day.getMinutes
    let Hours = day.getHours
    let Time = [Seconds, minute, Hours ]
    alert (Time.join(":"))
}
