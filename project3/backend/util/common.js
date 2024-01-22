//Common functions


// Get days of month (For carddisplay)
function getDaysOfMonth(month, year) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayNo = date.getDate();
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

        daysArray.push({ dayNo, dayName });
    }

    return daysArray;
}
