import { gql } from '@apollo/client';

// vehicleType value for car=1 , for bike = 2, for all = 0
export const GET_BRAND_LIST = gql`
query($vehicleType: Int!, $offset: Int!, $limit: Int!) {
  brandList (vehicleType: $vehicleType, offset: $offset, limit: $limit) {
      id
      brandName
      stypeId
      brandImageUrl
  }
}
`;

// stypeId for car = 1, for bike = 2
// sbId is brand Id
// category is "Popular", "Latest", and "Upcoming"
export const GET_MODEL_LIST = gql`
query ($stypeId: Int, $sbId: Int, $category: String, $offset: Int, $limit: Int, $bodyType: String) {
  modelList(stypeId: $stypeId, sbId: $sbId, category: $category, offset: $offset, limit: $limit, bodyType: $bodyType) {
      id
      name
      image
      stypeId
      category
      slug
      variants {
        id
        modelId
        sid
        stypeId
        sbId
        userId
        exShowRoomPrice
        name
        fuelType
        bodyType
        offerImage
        offerMessage
        offer
      }
  }
}
`;

export const GET_NEWS_LIST = gql`
query($offset: Int, $limit: Int) {
  newsList (offset: $offset, limit: $limit) {
    id
    header
    content
    timeStamp
    slug
    image
  }
}
`;

export const GET_VIDEOS_LIST = gql`
query($offset: Int, $limit: Int) {
  videosList (offset: $offset, limit: $limit) {
    id
    header
    image
    videoId
  }
}
`;

// for carComparison list vahicleType = 1, for bike vehicleType = 2
export const GET_COMPARISON_LIST = gql`
query($vehicleType: Int!) {
  popularComparisonList(vehicleType: $vehicleType) {
    product1 {
      id
      image
      stypeId
      variants {
        id
        name
        exShowRoomPrice
        onRoadPrice
      }
    }
    product2 {
      id
      image
      stypeId
      variants {
        id
        name
        exShowRoomPrice
        onRoadPrice
      }
    }
  }
}
`;

export const GET_USED_PRODUCT_LIST = gql`
query(
  $stypeId: Int,
  $sbId: Int,
  $city: String,
  $model: String,
  $variant: String,
  $province: String,
  $dealerId: Int,
  $offset: Int,
  $limit: Int,
  
)
  {
    usedProductList
    (
      stypeId: $stypeId,
      sbId: $sbId,
      city: $city,
      model: $model,
      variant: $variant,
      province: $province,
      dealerId: $dealerId,
      offset: $offset,
      limit: $limit,
     
    ) {
      id
      model
      variant
      slug
      vehicleName
      expectedPrice
      kmsDriven
      images {
        id
        url
      }
      sbId
  }
}
`;

export const GET_CAR_MODEL_DETAILS = gql`
query ($modelId: String!) {
  carModelDetail(modelId: $modelId) {
     model {
      id
      name
      image
      stypeId
      category
      slug
      files {
        id
        url
        fType
        type
      }
    }

    variants {
      id
      modelId
      sid
      stypeId
      sbId
      name
      onRoadPrice
      exShowRoomPrice
      fuelType
      bodyType
      offerImage
      offerMessage
      offer
     CarVarientEntertainmentCommunication {
        id
        varientId
        DVDPlayer
        audioSystemRemoteControl
        integrated2DINAudio
        USBAuxiliaryinput
        bluetoothConnectivity
        touchScreen
        connectivity
				}

     CarVarientSafty {
      id
      varientId
      antiLockBrakingSystem
      centralLocking
      antiTheftAlarm
      noOfAirbags
    }

     CarVarientExterior {
      id
      varientId
      adjustableHeadlights
      fogLightsFront
      fogLightsRear
      exteriorRearViewMirror
      wheelCovers
      alloyWheelSize
      roofCarrier
      outsideRearViewMirrorTurnIndicators
    }

     CarVarientInterior {
      id
      varientId
      tachometer
      electronicMultiTripmeter
      digitalClock
      cigaretteLighter
      digitalOdometer
      heightAdjustableDriverSeat
    }

     CarVarientComfortConvenience {
      id
      varientId
      powerSteering
      powerWindowsFront
      powerWindowsRear
      airConditioner
      heater
      adjustableSteering
    }

     CarVarientDimentionCapacity {
    id
    varientId
    length
    width
    height
    bootSpace
    seatingCapacity
    groundClearanceUnladen
    wheelBase
    frontTread
    rearTread
    rearHeadroom
    frontHeadroo
    frontLegroo
    rearShoulderroom
    noOfDoors
    }

     CarVarientSuspensionSteeringBreak {
      id
      varientId
      frontSuspension
      rearSuspension
      shockAbsorbersType
      steeringType
      steeringColumn
      steeringGearType
      turningRadius
      frontBrakeType
      rearBrakeType
    }

     CarVarientFuelPerformance {
      id
      varientId
      fuelType
      mileage
      fuelTankCapacity
      topSpeed
    }

     CarVarientEngineTransmission {
      id
      varientId
      engineType
      displacement
      maxPower
      maxTorque
      noOfcylinder
      valvesPerCylinder
      valveConfiguration
      fuelSupplySystem
      turboCharge
      superCharge
      transmissionType
      gearBox
      driveType
    }

     CarVarientKeyFeatures {
      id
      varientId
      powerSteering
      powerWindowsFront
      antiLockBrakingSystem
      airConditioner
      driverAirbag passengerAirba
      automaticClimateControl
      fogLightsFront
      alloyWheels
    }

     CarVarientKeySpecification {
      id
      varientId
      ARAIMileage
      fuelType
      displacement
      maxPower
      maxTorque
      seatingCapacity
      transmissionTYpe
      bootSpace
      fuelTankCapacity
      bodyType
      serviceCost
    }

     CarVarientOverview {
      id
      varientId
      mileage
      engine
      BHP
      transmission
      seats
      serviceCost
    }

    }

  }
}
`;

export const GET_BIKE_MODEL_DETAILS = gql`
query ($modelId: Int!) {
  bikeModelDetail(modelId: $modelId) {
     model {
      id
      name
      image
      stypeId
      category
      slug

    }

    variants {
      id
      modelId
      sid
      stypeId
      sbId
      name
      onRoadPrice
      exShowRoomPrice
      fuelType
      bodyType
      offerImage
      offerMessage
      offer

    BikeVarientTyresBrakes {
      id
      varientId
      tyreSize
      tyreType
      wheelSize
      wheelsType
      frontBrake
      rearBrake
      frontBrakeDiameter
      rearBrakeDiameter
      radialTyre
    }

    BikeVarientElectricals {
    id
    varientId
    headlight
    tailLight
    turnSignalLamp
    batteryType
    batteryCapacity
    }

    BikeVarientDimensionCapacity {
    id
    varientId
    length
    width
    height
    fuelCapacity
    fuelReserve
    saddleHeight
    groundClearance
    wheelbase
    kerbWeight
    loadCapacity
    }

    BikeVarientChassisSuspension {
    id
    varientId
    chassis
    bodyType
    frontSuspension
    rearSuspension
    bodyGraphics
    }

    BikeVarientMileagePerformance {
    id
    varientId
    ARAIMileage
    maxSpeed
    Acceleration
    }

    BikeVarientFeatursSafety {
    id
    varientId
    ABS
    brakingType
    i3stechnology
    speedometer
    odometer
    fuelGauge
    console
    passSwitch
    additionalFeatures
    passengerFootrest
    }

    BikeVarientEngineTransmission {
    id
    varientId
    engineType
    displacement
    maxPower
    maxTorque
    noOofCylinders
    coolingSystem
    driveType
    starting
    fuelSupply
    clutch
    ignition
    transmission
    gearBox
    compressionRatio
    }

    BikeVarientKeyFeaturs {
    id
    varientId
    ABS
    brakingType
    speedometer
    odometer
    fuelGauge
    }

    BikeVarientKeySpecification {
    id
    varientId
    mileage
    engineType
    displacement
    noOfCylinders
    maxPower
    maxTorque
    frontBrake
    rearBrake
    fuelCapacity
    bodyType
    }

    BikeVarientOverview {
    id
    varientId
    engine
    power
    torque
    mileage
    brakes
    tyreType
    }
    }
  }
}
`;
 
export const GET_USED_PRODUCT_DETAILS = gql`
query($Id: String!) {
  usedProductDetail(Id: $Id) {
  id
  stypeId
  sbId
  vehicleName
  kmsDriven
  ownerShip
  city
  expectedPrice
  ownerName
  ownerEmail
  ownerPhoneNo
  image1
  image2
  image3
  image4
  image5
  customerType
  makeYear
  vehicleType
  brand
  model
  variant
  displacement
  taxClearance
  registrationNo
  province
  color
  fuelType
  remarks
  slug
  engineCondition
  image6
  image7
  negotiable
  address
  district
  dealerId
  timeStamp
    images {
      id
      url
      pId
    }
  }
}
`;

export const GET_SEARCH_KEYS = gql`
query {
  searchKeys {
    key
    value
  }
}
`;
