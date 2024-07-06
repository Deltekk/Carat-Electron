function showTime(): void {
    const date: Date = new Date();
    let h: number = date.getHours(); // 0 - 23
    let m: number = date.getMinutes(); // 0 - 59
    let s: number = date.getSeconds(); // 0 - 59
    let session: string = "AM";
    
    let format24: boolean = true;
    let showSeconds: boolean = false;
    
    if (h == 0) {
        h = 12;
    }
    
    if (h > 12 && format24 == false) {
        h = h - 12;
        session = "PM";
    }
    
    const formatTime = (unit: number): string => (unit < 10 ? "0" : "") + unit;
    let time: string = `${formatTime(h)}:${formatTime(m)}`;

    if (showSeconds == true)    
        time += `:${formatTime(s)}`;

    if (format24 == false)
        time += `${session}`
    
    const clockDisplay: HTMLElement | null = document.getElementById("Clock");
    if (clockDisplay) {
        clockDisplay.innerText = time;
        clockDisplay.textContent = time;
    }
    
    setTimeout(showTime, 1000);
}

showTime();
