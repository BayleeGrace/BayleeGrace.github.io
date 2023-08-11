class Rocket{
    //name properties first
    contructor(
        fuelType,
        weight,
        poer,
    ){
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    //now onto the methods
    launch(){
        console.log("Launch sequence started...");
        alert("Warning! Launch sequence started.");
        return true;//this just says it made it through the method
    }

    refuel(){
        console.log("Refuel sequence started...");//this goes in the console
        alert("Refueling in process...");
        return true;
    }

    detachThruster(thrusterID){
        console.log("Thruster sequence started...");
        alert("Thruster " + this.thrusterID + "has been successfully detached.");
        return true;
    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spacecraft,
        numOfAstronauts,
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spacecraft = spacecraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("The spacecraft " + this.spacecraft + "will launch on " + this.launchDateDay + "/" + 
            this.launchDateMonth + "/" + this.launchDateYear + " with an oxygen level of " + this.oxyLvl + "%.");
    }

    launch(){
        alert("Launch sequence for " + this.spacecraft + "has begun.");
    }

}

function displayFall(){
    console.log("displayFall started...");
    fallLaunch.displayMissionParameters();
}

function displaySpring(){
    console.log("displaySpring started...");
    springLaunch.displayMissionParameters();
}