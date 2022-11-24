function zmiana(){
	var muzyka = document.getElementById("songs_list").value;
	
	document.getElementById('song').innerHTML = '<audio id="audio-player" controls="controls" src='+muzyka+' type="audio/mp3">';
}