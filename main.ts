import chalk from "chalk"
import inquirer from "inquirer"

class Player {
    name : string
    fuel : number = 100
    constructor (name:string){
        this.name = name
    }
    decreaseFuel(){
        let fuel = this.fuel - 25
        this.fuel = fuel
        
    }
    increaseFuel(){
        let fuel = this.fuel = 100
        this.fuel = fuel
    }
}
class Opponent {
    name : string
    fuel : number = 100
    constructor (name:string){
        this.name = name
    }
    decreaseFuel(){
        let fuel = this.fuel - 25
        this.fuel = fuel
        
    }
    increaseFuel(){
        let fuel = this.fuel = 100
        this.fuel = fuel
    }
}

console.log(chalk.bold.redBright("_______________________________________"));
console.log(chalk.bold.magentaBright(">>> (: ")+ chalk.bold.cyan.underline("WelCome ") +chalk.bold.blue.underline("To ")+chalk.bold.redBright.strikethrough.underline("Advanture") +chalk.bold.greenBright.underline(" Game")+chalk.bold.magentaBright(" :) <<<"));
console.log(chalk.bold.redBright("_______________________________________\n"));


const player =  await inquirer.prompt(
    [
        {
            name : "name",
            type : "input",
            message : chalk.bold.greenBright("Enter Your Name :")
        }
    ]
)


const opponent =  await inquirer.prompt(
    [
        {
            name : "name",
            type : "list",
            message : chalk.bold.magentaBright("Select Your Opponent :"),
            choices : [chalk.bold.yellowBright("Skeleton"),chalk.bold.greenBright("Assasian"),chalk.bold.blueBright("Hulk"),chalk.bold.cyanBright("Zombie")]
        }
    ]
)
console.log("");

const p_Data = new Player(player.name) 
const o_Data = new Opponent(opponent.name) 
if (opponent.name =="Skeleton"||"Assasian"||"Hulk"||"Zombie"){
    
        console.log(chalk.bold.redBright(chalk.bold.redBright("<<<(: ")+`${chalk.bold.green(player.name)} VS ${chalk.bold.redBright(opponent.name)} ` +chalk.bold.redBright(" :)>>>\n") ));

   do{
    console.log("");
     
    const operation = await inquirer.prompt(
    
    [
        {
            name : "options",
            type : "list",
            message : chalk.bold.yellowBright("Select The Option Blew ...."),
            choices : [chalk.bold.magentaBright("Attack"), chalk.bold.cyanBright("Drink-Portion"),chalk.bold.greenBright("Run for life")]
        }
    ]
)
if(operation.options ==chalk.bold.magentaBright("Attack")){
   console.log("");
   
    let points = Math.floor(Math.random()*2)
    if(points >0){
        p_Data.decreaseFuel()
        console.log(chalk.bold.yellowBright("___________________________"));
        
        console.log(chalk.bold.red(`The Fuel Of ${chalk.magentaBright.bold(p_Data.name)} is ${p_Data.fuel} `));
        console.log("");
        
        console.log(chalk.bold.green(`The Fuel Of ${o_Data.name} is ${o_Data.fuel} `));
        console.log(chalk.bold.yellowBright("___________________________\n"));
        if(p_Data.fuel <=0){
            console.log("");
            
            
           
            console.log(chalk.bold.red("Oops .! "+chalk.magentaBright.bold(p_Data.name) +" | Loose The Game, Better Luck Next Time .!"));
            console.log(chalk.bold.greenBright(`The Winner Is | ${o_Data.name}`));
            process.exit()
        }
    
    }
    if(points <=0){
        o_Data.decreaseFuel()
        console.log(chalk.bold.yellowBright("___________________________"));
        
        console.log(chalk.bold.red(`The Fuel Of ${o_Data.name} is ${o_Data.fuel} `));
        console.log("");
        
        console.log(chalk.bold.green(`The Fuel Of ${chalk.magentaBright.bold(p_Data.name)} is ${p_Data.fuel} `));
       console.log(chalk.bold.yellowBright("___________________________"));
        
        if(o_Data.fuel <=0){
            console.log("");
            
        
                
                
            console.log(chalk.bold.red("Oops .! "+(o_Data.name)+" | Loose The Game, Better Luck Next Time .!"));
            console.log(chalk.bold.greenBright(`The Winner Is | ${chalk.magentaBright.bold(p_Data.name)}`));
            process.exit()
   
            
        }
  
    }

}
if(operation.options ==chalk.bold.cyanBright("Drink-Portion")){
    p_Data.increaseFuel()
    console.log(chalk.bold.greenBright("Your Health Is Boosted To 100 .!"));
    
}
if(operation.options ==chalk.bold.greenBright("Run for life")){
    console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time .!"));
    process.exit()
}
}while(true)
}
