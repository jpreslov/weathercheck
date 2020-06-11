import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

let CityCard = (cityNames: any) => {
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
            City Name
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Brief Weather Overview
          </Card.Subtitle>
          <Card.Text>
            More in depth description of expected weather
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CityCard;
