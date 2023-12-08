//your JS code here. If required.
function  daysOfAYear(input) {
	if((input % 4 == 0 && input % 100 != 0) || (input% 400 == 0))
	{
		return 366;
	}
	else
	{
		return 365;
	}
}
let input=prompt("enter input");
alert(daysOfAYear(input)); 