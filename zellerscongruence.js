
window.onload = function()
{
    writeToConsole("Zeller's Congruence<br/>", "console");
    writeToConsole("-------------------<br/><br/>", "console");

    showDatesAndDays();
}


function showDatesAndDays()
{
    let ZellerDayNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

    let date;
    let h;

    for(let i = 0; i < 20; i++)
    {
        date = new Date(Date.now() * Math.random());

        writeToConsole(date.toDateString() + "<br/>", "console");

        h = zellerGregorian(date);

        writeToConsole("Day according to Zeller's Congruence: " + ZellerDayNames[h] + "<br/><br/>", "console");
    }
}


function zellerGregorian(date)
{
    let h = 0; // day of week, Saturday = 0

    let q = date.getDate(); // day of month
    let m = date.getMonth(); // month, 3 to 14 = March to February
    let Y = 1900 + date.getYear(); // year is 1900-based

    // adjust month to run from 3 to 14 for March to February
    if(m <= 1)
    {
        m+= 13;
    }
    else
    {
        m+= 1;
    }

    // and also adjust year if January or February
    if(date.getMonth() <= 1)
    {
        Y--;
    }

    // Calculate h as per Herr Zeller
    h = (q + Math.floor(((13 * (m + 1)) / 5)) + Y + Math.floor((Y / 4)) - Math.floor((Y / 100)) + Math.floor((Y / 400))) % 7;

    return h;
}
