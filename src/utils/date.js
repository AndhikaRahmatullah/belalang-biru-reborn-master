export const res = () => {
	const d = new Date();
	const weekday = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
	const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

	// currentHours = d.getHours();
	// currentHours = ("0" + currentHours).slice(-2);

	let day = weekday[d.getDay()],
		month = months[d.getMonth()],
		date = d.getDate(),
		year = d.getFullYear(),
		// hour = d.getHours(),
		hour = ("0" + d.getHours()).slice(-2),
		minute = ("0" + d.getMinutes()).slice(-2),
		second = ("0" + d.getSeconds()).slice(-2);

	let x = `${day}, ${date} ${month} ${year} | ${hour}:${minute}:${second} WIB`;

	return x;
}