function restart(){
	
				var wavesurfer = WaveSurfer.create({
				container: document.querySelector('#bar'),
				waveColor: 'violet',
				progressColor: 'purple'
				});
				
				var song = document.getElementById("songs_list").value ;
				wavesurfer.load(song);							
				const playPauseButton = document.querySelector(".play-pause-button");
				const muteUnmuteButton = document.querySelector(".mute-unmute-button");
				const selectButton = document.querySelector(".select-button");
				
				wavesurfer.on('ready',function () {
					playPauseButton.addEventListener('click', () => {
						wavesurfer.playPause();
						playPauseButton.textContent = wavesurfer.isPlaying() ? 'Pauzuj' : "Odtwórz";
					})
				});	
				
				wavesurfer.on('ready',function () {
					muteUnmuteButton.addEventListener('click', () => {
						wavesurfer.toggleMute();
						muteUnmuteButton.textContent = wavesurfer.getMute()==false ? 'Wycisz' : "Odwycisz";
					})
				});							
}