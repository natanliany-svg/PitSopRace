// קובץ לשליפת הנתונים מהרשרת וכן הצגה וניהול התור


//import fs from "fs"
const apiUrl = "https://server-for-test-week-13.onrender.com/api/race"

export async function readRaceData() {

    try {
        const res = await fetch(apiUrl)
        if (!res.ok) {
            throw new Error(`HTTP status: ${res.status}`)
        }

        const data = await res.json()
        return data
    } catch (err) {
        console.log("שגיאה בהצגת הנתונים :", err.message)
        return null
    }
}





export function showQueue(race) {
    const totalCars = race.cars.length
    const doneList = race.cars.filter(c => c.status === "done")
    const waitList = race.cars.filter(c => c.status === "wating")


    console.log("========== PIT STOP QUEUE ==========")
    console.log(`Race: ${race.raceName}`)
    console.log(`Lap: ${race.currentLap} / ${race.totalLaps}`)
    console.log(`Total cars in race: ${totalCars}`)
    console.log(` Pit stops completed: ${doneList.length}`)
    console.log("=====");
    
    console.log("Cars waiting for pit stop:")
    waitList.forEach(c => {
        console.log(`- Car #${c.carNumber} | Driver: ${c.driverName}`)
    })
}


export function showNextCar(cars) {
    const nextCar = cars.find(c => c.status === "waiting")
    if (nextCar) {
        console.log("Next car the enter the pit:")
        console.log(`>> Car #${nextCar.carNumber} | Driver: ${nextCar.driverName}`)
        console.log("==================================")
    }
    return nextCar
}



export function sendRadio(car) {
    if (car) {
        console.log(`Radio mesage to car #${car.carNumber}: "Box  box  box, ${car.driverName}, pit this lap!"`)
    }
}

export function searchByNum(cars, num) {
    const found = cars.find(c => c.carNumber === num)
    return found
}
























