let countdownInterval;

function startTimer() {
    clearInterval(countdownInterval);
    const endTime = new Date(document.getElementById('datetimePicker').value).getTime();
    if (isNaN(endTime)) {
        alert("Please select a valid date and time.");
        return;
    }

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "Time's Up!";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent = 
            `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }, 1000);
}
