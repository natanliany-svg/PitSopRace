// קובץ הרצה של כל הנתונים 

import { readRaceData, showQueue, showNextCar, sendRadio, searchByNum } from "./services/race_service.js"


    const race = await readRaceData()


    showQueue(race)
    console.log("  ")





    const nextCar = showNextCar(race.cars)
    sendRadio(nextCar)
    console.log("\n--- חיפוש מכונית לפי מספר  ---")


