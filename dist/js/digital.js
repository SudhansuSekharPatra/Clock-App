setInterval(clock, 500);

function clock() {
	let currentDate = new Date();
	let hrs = currentDate.getHours();
	let mins = currentDate.getMinutes();
	let secs = currentDate.getSeconds();
	let amPm = "AM";

	// AM - PM

	if (hrs >= 12) {
		amPm = "PM";
	}

	// 24 hours to 12 hours

	if (hrs > 12) {
		hrs = hrs - 12;
	}
	if (hrs == 0) {
		hrs = 12;
	}

	// Single digits to double digits

	if (hrs < 10) {
		hrs = "0" + hrs;
	}
	if (mins < 10) {
		mins = "0" + mins;
	}
	if (secs < 10) {
		secs = "0" + secs;
	}

	document.getElementById("current-time").innerHTML =
		hrs + " : " + mins + " : " + secs + " " + amPm;
}
