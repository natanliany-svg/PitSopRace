// בדיקת נתונים של המירוץ


export function checkNum(num) {
    if (typeof num !== "number" || isNaN(num)) {
        return false
    }

    if (num <= 0) {
        return false
    }
    return true
}


export function checkRace(race) {
    if (!race || typeof race !== "object") {
        return false
    }
    
    if (!Array.isArray(race.cars)) {
        return false
    }
    return true
}


