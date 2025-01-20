let stepCount = 0;
let isRunning = false;

function detectSteps() {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', (event) => {
            if (!isRunning) return;

            const acceleration = event.accelerationIncludingGravity;
            const totalAcceleration = Math.sqrt(
                acceleration.x ** 2 +
                acceleration.y ** 2 +
                acceleration.z ** 2
            );

            if (totalAcceleration > 15) {
                stepCount++;
                document.getElementById('stepCount').textContent = Steps: ${stepCount};
            }
        });
    } else {
        alert('DeviceMotion is not supported on this device.');
    }
}

document.getElementById('startButton').addEventListener('click', () => {
    isRunning = !isRunning;
    document.getElementById('startButton').textContent = isRunning ? 'Pause' : 'Start';
    if (isRunning) detectSteps();
});

document.getElementById('resetButton').addEventListener('click', () => {
    stepCount = 0;
    document.getElementById('stepCount').textContent = 'Steps: 0';
});
