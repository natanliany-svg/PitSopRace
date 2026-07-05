// קובץ הרצה של כל הנתונים 
//import rl from "readline-sync"
import { checkRace } from "./utils/validator.js"
import { readRaceData, showQueue, showNextCar, sendRadio, searchByNum } from "./services/race_service.js"


//const choice = rl.question("Please enter your choice : ").trim()

async function main() {
    console.log("Pit Stop Queue - Race Team Management System")
    console.log('Race engineer: "Let\'s check the current queue status on the pit wall."\n')
    console.log("Loading queue data...\n")

    const race = await readRaceData()
    if (!checkRace(race)) {
        console.log("Error: Could not load valid race data.")
        return
    }


    showQueue(race)
    console.log("")
    const nextCar = showNextCar(race.cars)
    sendRadio(nextCar)
    console.log("\n--- Search for a car by number ---")



    const car44 = searchByNum(race.cars, 44)
    if (car44) {
        console.log(`Found car #${car44.carNumber} | Driver: ${car44.driverName} | Status: ${car44.status}`)
    } else {
        console.log("Error: No car found with number #44 in the current race.")
    }



    const car99 = searchByNum(race.cars, 99)
    if (car99) {
        console.log(`Found car #${car99.carNumber} | Driver: ${car99.driverName} | Status: ${car99.status}`)
    } else {
        console.log("Error: No car found with number #99 in the current race.")
    }

    console.log("\n Proces compleeted succesfully. The pit wall is up to date.")
}

main()




