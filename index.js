let a;
let date1;
let time1;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


b = new Date();
var hr = b.getHours();

setInterval(() => {
    var period = "AM";
    b = new Date();
    var hr = b.getHours();
    if (hr >= 12) {
        period = "PM";
    }

    
    
    
    a = new Date();
    date1 = a.toLocaleDateString(undefined, options);
    time1 = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() + " " + period;
    document.getElementById('time').innerHTML = time1 + " <br> Date : " + date1;

}, 1000);
