import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

let CityCard = (city: any) => {
  return (
    <React.Fragment>
      <BootstrapSwitchButton
        checked={false}
        onlabel="Metric"
        offlabel="Imperial"
        // onChange={(checked: boolean) => {
        //   useState({ units: checked });
        // }}
      />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            city.map(
            {(x: any) => {
              return x.name;
            }}
            )
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CityCard;
