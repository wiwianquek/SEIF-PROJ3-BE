//Common functions

module.exports = {
    getDaysOfMonth,
}

// Get days of month (For carddisplay)
function getDaysOfMonth(month, year) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayNo = date.getDate();
        const dayName = dayNames[date.getDay()];
        const dateStr = date.toISOString().split('T')[0];
        daysArray.push({ dayNo: dayNo, dayName: dayName, date: dateStr});
    }

    return daysArray;
}
