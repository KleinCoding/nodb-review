import React from "react";
import "../styles/Calculator.css";
import axios from "axios";

function Options({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}

let caloriesVal = 0;
let proteinVal = 0;
let sodiumVal = 0;
let transfatVal = 0;

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      places: [],
      favorites: [],
      currentView: "places",
      meats: [],
      vegs: [],
      sauces: [],
      breads: [],
      drinks: [],
      sides: [],
      calories: 0,
      protein: 0,
      sodium: 0,
      transfats: 0,
      selectedMeat: "",
      selectedBread: "",
      selectedVeg: "",
      selectedSide: "",
      selectedDrink: "",
      selectedSauce: "",
      caloriesTemp: 0
    };
    this.addToFavorites = this.addToFavorites.bind(this);
    this.addCaloriesMeats = this.addCaloriesMeats.bind(this);
    this.addCaloriesBreads = this.addCaloriesBreads.bind(this);
    this.addCaloriesVegs = this.addCaloriesVegs.bind(this);
    this.addCaloriesSauces = this.addCaloriesSauces.bind(this);
    this.addCaloriesDrinks = this.addCaloriesDrinks.bind(this);
    this.addCaloriesSides = this.addCaloriesSides.bind(this);
    this.addEmUp = this.addEmUp.bind(this);
    this.restState = this.resetState.bind(this);
    this.setVals = this.setVals.bind(this);
  }

  ///NUTRITION FUNCTIONS BELOW

  addEmUp() {
    this.setVals();
    this.addCaloriesBreads();
    this.addCaloriesMeats();
    this.addCaloriesVegs();
    this.addCaloriesSauces();
    this.addCaloriesDrinks();
    this.addCaloriesSides();
  }

  resetState() {
    if (this.state.calories >= 1) {
      console.log("did calories reset?");
      this.setState({ calories: 0 });
    }
  }

  setVals() {
    if(this.state.caloriesTemp >= 1){
      this.setState({caloriesTemp: 0})}
    console.log("values initialized with setVals", this.state.caloriesTemp);
    let caloriesVal = 0;
    let proteinVal = 0;
    let sodiumVal = 0;
    let transfatVal = 0;
    let caloriesTotal = 0;
  
  }


  resetVals() {
    if (caloriesVal >= 1) {
      let caloriesVal = 0;
    }
    return caloriesVal;
  }

  addCaloriesBreads() {
    if (this.state.selectedMeat === "Wheat") {
      
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[1].calories);

    }
    if (this.state.selectedMeat === "White") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[2].calories);
     
    }
    if (this.state.selectedMeat === "Italian Herb") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[3].calories);
  
    }
    if (this.state.selectedMeat === "Flatcarboard") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[4].calories);

    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after breads -> ",
      this.state.selectedBread,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesMeats() {
    if (this.state.selectedMeat === "Ham") {
      
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[1].calories);

    }
    if (this.state.selectedMeat === "Turkey") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[2].calories);

    }
    if (this.state.selectedMeat === "Iguana") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[3].calories);

    }
    if (this.state.selectedMeat === "Salami") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[4].calories);
 
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after MEat -> ",
      this.state.selectedMeat,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesVegs() {
    if (this.state.selectedVeg === "Lettuce") {
      // this.setState({ caloriesTemp: this.state.meats[1].calories });
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[1].calories);
 
    }
    if (this.state.selectedVeg === "Spinach") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[2].calories);
      // console.log("did calories go up? - Turkey");
      // this.setState({ calories: this.state.meats[2].calories += this.state.calories});
    }
    if (this.state.selectedVeg === "Bulbasaur") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[3].calories);
      // console.log("did calories go up? - Iguana");
      // this.setState({ calories: this.state.meats[3].calories += this.state.calories});
    }
    if (this.state.selectedVeg == "Onion") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[4].calories);
      // console.log("did calories go up? - Salami");
      // this.setState({ calories: this.state.meats[4].calories += this.state.calories});
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Veg -> ",
      this.state.selectedVeg,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesSauces() {
    if (this.state.selectedSauce === "Vinaigrette") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[1].calories);

    }
    if (this.state.selectedSauce === "Mustard") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[2].calories);
    }
    if (this.state.selectedSauce === "Cream of people") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[3].calories);
    }
    if (this.state.selectedSauce === "Mayo") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[4].calories);
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Sauce -> ",
      this.state.selectedSauce,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesDrinks() {
    if (this.state.selectedDrink === "Coke") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[1].calories);
      // console.log(
      //   caloriesVal,
      //   "did calories go up? - Sauce1 caloriesVal",
      //   caloriesVal
      // );
    }
    if (this.state.selectedDrink === "Sprite") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[2].calories);
    }
    if (this.state.selectedDrink === "Sugarjuice") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[3].calories);
    }
    if (this.state.selectedDrink === "Salami Water") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[4].calories);
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Drink -> ",
      this.state.selectedDrink,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesSides() {
    if (this.state.selectedSide === "Chocochip") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[1].calories);
      // console.log(
      //   caloriesVal,
      //   "did calories go up? - Side1 caloriesVal",
      //   caloriesVal
      // );
    }
    if (this.state.selectedSide === "Macadamia nut") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[2].calories);
    }
    if (this.state.selectedSide === "Chips") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[3].calories);
    }
    if (this.state.selectedSide === "Death") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[4].calories);
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Side -> ",
      this.state.selectedSide,
      caloriesTotal
    );
    return caloriesTotal;
  }


  // NUTRITION FUNCTIONS ABOVE

  componentDidMount() {
    this.setVals();
    axios.get("/api/places").then(response => {
      this.setState({ places: response.data });
    });
    axios
      .get("/api/favs")
      .then(response => {
        this.setState({ favorites: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/ingredients/meat")
      .then(response => {
        this.setState({ meats: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/ingredients/veg")
      .then(response => {
        this.setState({ vegs: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/sauce")
      .then(response => {
        this.setState({ sauces: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/bread")
      .then(response => {
        this.setState({ breads: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/side")
      .then(response => {
        this.setState({ sides: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/drink")
      .then(response => {
        this.setState({ drinks: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  // updateAnimals(newMeats) {
  //   this.setState({ meats: newMeats });
  // }

  addToFavorites(place) {
    axios.post("/api/favs", place).then(response => {
      this.props.updateFavorites(response.data);
    });
  }

  render() {
    return (
      <div className="ingredients__container">
        <h1>
          <select
            name="breads"
            className="form-control"
            onChange={e => this.setState({ selectedBread: e.target.value })}
          >
            <Options options={this.state.breads} />
          </select>
        </h1>
        <h1>
          <select
            name="meats"
            className="form-control"
            onChange={e => this.setState({ selectedMeat: e.target.value })}
          >
            <Options options={this.state.meats} />
          </select>
        </h1>
        <h2>
          <select
            name="vegs"
            className="form-control"
            onChange={e => this.setState({ selectedVeg: e.target.value })}
          >
            <Options options={this.state.vegs} />
          </select>
        </h2>
        <h3>
          <select
            name="sauces"
            className="form-control"
            onChange={e => this.setState({ selectedSauce: e.target.value })}
          >
            <Options options={this.state.sauces} />
          </select>
        </h3>
        <h4>
          <select
            name="drinks"
            className="form-control"
            onChange={e => this.setState({ selectedDrink: e.target.value })}
          >
            <Options options={this.state.drinks} />
          </select>
        </h4>
        <h5>
          <select
            name="sides"
            className="form-control"
            onChange={e => this.setState({ selectedSide: e.target.value })}
          >
            <Options options={this.state.sides} />
          </select>
        </h5>
        <button
          onClick={() => {
            this.setVals();
            this.addCaloriesBreads();
            this.addCaloriesMeats();
            this.addCaloriesVegs();
            this.addCaloriesSauces();
            this.addCaloriesDrinks();
            this.addCaloriesSides();
            // this.setVals();
          }}
        >
          Add Me Up!
        </button>
        {/* <button onClick = {this.addEmUp()}>AddEmUp!</button> */}
        {/* <h1>{caloriesTotal}</h1> */}
      </div>
    );
  }
}

export default Calculator;