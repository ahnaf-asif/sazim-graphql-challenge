
// it takes an integer representing a timestamp and returns a human-readable date-time format string
export function timestampToDateString(ts){

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dateTime = new Date(parseInt(ts));

    let a = "am";
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    if(day < 10)day = `0${day}`;
    let year = dateTime.getFullYear();

    let hour = dateTime.getHours();
    if(hour >= 12){
        a = "pm";
        hour-=12;
    }
    if(hour < 10)hour = `0${hour}`;

    let minutes = dateTime.getMinutes();
    if(minutes < 10)minutes = `0${minutes}`;

    return `${day} ${month}, ${year} ${hour}:${minutes} ${a}`;
}

export function printCategories(categories){
    const categoryNames = categories.map(cat => cat.name);
    return categoryNames.toString();
}

// checking if current user bought the product
export function checkIfUserBoughtThisProduct(product){
    const auth = JSON.parse(localStorage.getItem('auth'));
    if(!product.purchaseHistory || !auth)return false;
    return product.purchaseHistory.user.id === auth.id ;
}
export function checkIfUserCreatedThisProduct(product){
    const auth = JSON.parse(localStorage.getItem('auth'));
    if(!auth){
        return false;
    }
    else{
        return product.user.id === auth.id;
    }
}
export function checkIfUserSoldThisProduct(product){
    const auth = JSON.parse(localStorage.getItem('auth'));
    if(!auth){
        return false;
    }
    return product.user.id === auth.id && product.purchaseHistory
}
export function checkIfUserLentThisProduct(product){
    const auth = JSON.parse(localStorage.getItem('auth'));
    if(!auth){
        return false;
    }
    return product.user.id === auth.id &&  product.rentHistories.length > 0;
}
export function checkIfUserBorrowedThisProduct(product){
    const auth = JSON.parse(localStorage.getItem('auth'));
    if(!auth){
        return false;
    }
    for(const rentHistory of product.rentHistories){
        if(rentHistory.user.id === auth.id){
            return true;
        }
    }
    return false;
}

export function checkIfProductAlreadySold(product){
    return product.purchaseHistory;
}
export function shouldShowBuyRent(product){
    const auth = JSON.parse(localStorage.getItem('auth'));
    if(!auth){
        return false;
    }

    if(checkIfUserCreatedThisProduct(product))return false;
    return !checkIfProductAlreadySold(product);
}

export function checkIfTimePeriodAvailable(from, to, existingTimeSegments){
    for(const timeLine of existingTimeSegments){
        if(timeLine.from <= from && timeLine.to >= from)return false;
        if(timeLine.from <= to && timeLine.to >= to)return false;
        if(timeLine.from <= from && timeLine.from >= to)return false;
        if(timeLine.from >=from && timeLine.to <= to)return false;
    }
    return true;
}

export default {
    timestampToDateString,
    printCategories,
    checkIfUserBoughtThisProduct,
    checkIfUserCreatedThisProduct,
    checkIfUserSoldThisProduct,
    checkIfUserLentThisProduct,
    checkIfUserBorrowedThisProduct,
    checkIfProductAlreadySold,
    shouldShowBuyRent
}