
// it takes an integer representing a timestamp and returns a human-readable date-time format string
export function timestampToDateString(ts){

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dateTime = new Date(parseInt(ts));

    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    if(day < 10)day = `0${day}`;
    let year = dateTime.getFullYear();

    return `${day} ${month}, ${year}`;
}

export function printCategories(categories){
    const categoryNames = categories.map(cat => cat.name);
    return categoryNames.toString();
}

export default {
    timestampToDateString,
    printCategories
}