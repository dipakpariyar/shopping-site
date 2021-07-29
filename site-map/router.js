import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
  <Switch>
    {/* <Route exact path="/used/:usedVehicleType/:dealerId" /> */}
    <Route exact path="/" />
    <Route exact path="/contact-us" />
    <Route exact path="/about-us" />
    <Route path="/login" />
    <Route exact path="/emi-calculator" />
    <Route exact path="/video-review" />
    <Route exact path="/user-review" />
    <Route exact path="/privacy-policy" />
    <Route exact path="/brands" />
    <Route exact path="/terms-and-conditions" />
    <Route exact path="/customer-support" />
    <Route exact path="/return-policy" />
    <Route exact path="/news" />
    <Route exact path="/how-does-it-works" />
    <Route path="/sell-vehicle" />
    <Route exact path="/compare/cars" />
    <Route exact path="/compare/bikes" />

    <Route exact path="/popular/cars" />
    <Route exact path="/popular/bikes" />

    <Route exact path="/latest/cars" />
    <Route exact path="/latest/bikes" />

    <Route exact path="/upcoming/cars" />
    <Route exact path="/upcoming/bikes" />

    <Route exact path="/discount-offers/cars" />
    <Route exact path="/discount-offers/bikes" />

    <Route exact path="/showrooms/cars" />
    <Route exact path="/showrooms/bikes" />

    <Route exact path="/service-center/cars" />
    <Route exact path="/service-center/bikes" />

    <Route exact path="/used/cars" />
    <Route exact path="/used/bikes" />

    <Route exact path="/used/showrooms/cars" />
    <Route exact path="/used/showrooms/bikes" />

    <Route exact path="/:vehicleType/brand/:brandName" schema="Brand" />
    <Route path="/details/:proId" schema="Model" />
    <Route path="/used-vehicle/details/:usedVehicleId" schema="UsedVehicle" />

    <Route exact path="/used/city/:cityId/:usedVehicleType" schema="City" />

    <Route exact path="/news-details/:newsSlug" schema="News" />
  </Switch>
);
