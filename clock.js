function run() {
	let d = new Date()
	let da = d.getDate()
	let mo = d.getMonth()+1
	let ye = d.getFullYear()
	let ho = `${d.getHours()}`.padStart(2, '0')
	let mi = `${d.getMinutes()}`.padStart(2, '0')
	let se = `${d.getSeconds()}`.padStart(2, '0')
	let ds = '-';
	let ts = ':';
	
	document.getElementById('time').innerHTML = ho+ts+mi;
	document.getElementById('date').innerHTML = da+ds+mo+ds+ye;

	setTimeout(run, 5000)
}
