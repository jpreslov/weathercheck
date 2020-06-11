import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import CityCard from "./CityCard";

const Jumbo: React.FC<iCities> = () => {
  //make fetches and pass props from this file
  // let apiKey = "73f9f91185180b6bf652ddc384e75345";
  let apiKey = "daa58b1e923383b635bc599a9bb91bec";
  let [cities, setCity] = useState;
  let [checked, setChecked] = useState<boolean>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/find?lon=${lon}&lat=${lat}&units=imperial&appid=${apiKey}`
        )
          .then((res) => res.json())
          .then((cities) => {
            setCity(cities);
          })
          .catch((err) => console.error(err));
        });
      } 
    }, []);
    
    console.log(cities);
    
  if (cities) {

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="row align-items-center">
            <div className="col-4">
              <h1>Welcome to Weathercheck</h1>
            </div>

            <div className="col">
              <p>A simple way to check the weather.</p>
            </div>
            <div className="col">
              <Button onClick={() => {}}>Use My Location</Button>
              <Button>Let Me Search</Button>
            </div>
          </div>
        </Jumbotron>
        <CityCard />
      </React.Fragment>
    );
  }
};

export interface iCities null

export default Jumbo;
