//create instance of express application
import express from 'express';
import cors from 'cors'

let fish = {
    '0': {
        name: 'Betta',
        tankSize: 5
    },
    '1': {
        name: 'Fancy Goldfish',
        tankSize: 40
    },
    '2': {
        name: 'Shrimp',
        tankSize: 1
    },
    '3': {
        name: 'Comet Goldfish',
        tankSize: 120
    },
    '4': {
        name: 'Koi',
        tankSize: 1000
    },
    '5': {
        name: 'Snail',
        tankSize: 5
    },
    '6': {
        name: 'Angel Fish',
        tankSize: 500
    },
    '7': {
        name: 'Giant Danios',
        tankSize: 200
    }
}


//create instance of express application
const app = express();
app.use(express.json())

//set the port the application will be running on
const port = process.env.PORT || 3001;


app.get('/gallons/:gallons', (req,res) => {

    let names = [];

    Object.keys(fish).forEach((key,value) => {
        let n = `${fish[key].tankSize}`
        
        console.log(`The input is: ${req.params.gallons}, the fish is ${fish[key].name} the tank size is ${n}`)
        if (req.params.gallons > n){
          names.push(fish[key].name)
        }
    })
    
    res.send(names)
})



app.listen(port, () => {
    console.log(`fish app listening on port ${port}`)
})