day = new Date()
				hour = day.getHours()
				if (hour>=5 && hour<12) greeting = "Доброе утро! Сегодня "
				else { if (hour>=12 && hour<18) greeting = "Добрый день! Сегодня "
				else { if (hour>=18 && hour<24) greeting = "Добрый вечер! Сегодня "
				else { if (hour>=0 && hour<5) greeting = "Доброй ночи! Сегодня "
				}
				}
				}
				document.write(greeting);
var d = new Date();
var day=new Array("воскресенье,","понедельник,","вторник,","среда,","четверг,","пятница,","суббота,");
var month=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
document.write(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()]+ " " + d.getFullYear() + " г.");
let element = document.getElementById("clock");
