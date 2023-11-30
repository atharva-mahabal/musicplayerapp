document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playButton = document.getElementById("play-btn");
    const pauseButton = document.getElementById("pause-btn");
    const stopButton = document.getElementById("stop-btn");
    const searchInput = document.getElementById("search-input");
    const songList = document.getElementById("song-ul");

    playButton.addEventListener("click", function () {
        audioPlayer.play();
    });

    pauseButton.addEventListener("click", function () {
        audioPlayer.pause();
    });

    stopButton.addEventListener("click", function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    // Handle song selection from the list
    songList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const songSrc = event.target.getAttribute("data-src");
            audioPlayer.src = songSrc;
            audioPlayer.play();
        }
    });

    // Handle search input changes
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const songs = songList.querySelectorAll("li");

        songs.forEach((song) => {
            const songTitle = song.textContent.toLowerCase();
            const isVisible = songTitle.includes(query);
            song.style.display = isVisible ? "block" : "none";
        });
    });
});
