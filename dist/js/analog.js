// Clock function

function clock() {
	// Date, Hours, Minutes & Seconds
	let d = new Date();
	let htime = d.getHours();
	let mtime = d.getMinutes();
	let stime = d.getSeconds();

	// Hands rotation
	let hrotate = 30 * htime + mtime / 2;
	let mrotate = 6 * mtime;
	let srotate = 6 * stime;

	// Getting the classes
	let hour = document.querySelector(".clock__hour");
	let minute = document.querySelector(".clock__minute");
	let second = document.querySelector(".clock__second");

	// Final rotation
	hour.style.transform = `rotate(${hrotate}deg)`;
	minute.style.transform = `rotate(${mrotate}deg)`;
	second.style.transform = `rotate(${srotate}deg)`;
}

// Calling the function
setInterval(clock, 1000);
