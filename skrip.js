function updateWaterLevel(height, percentage) {
    const waterHeight = (height / 300) * 100; // Konversi tinggi air ke persentase
    const waveHeight = (height / 300) * 10; // Konversi tinggi air ke tinggi wave

    document.getElementById('water').style.height = waterHeight + '%';
    document.getElementById('wave').style.height = waveHeight + 'px'; // Update the height of the wave animation
    document.getElementById('percentage').innerText = percentage + '%';
}