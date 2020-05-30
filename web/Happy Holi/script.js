var Festival={
    holi:{
        day:2,
        month:2,
        year:2018
    }
}
var today=new Date();
(today.getDate()==Festival.holi.day && today.getMonth()==Festival.holi.month && today.getFullYear()==Festival.holi.year)?alert("Happy Holi!"):alert("Oops! you are late..");