# SriGeo.js

SriGeo.js is a geolocation-based JavaScript library that offers advanced location tracking and geofencing functionalities. It provides developers with the ability to create location-aware applications, track users' movements, define virtual boundaries (geofences), and trigger custom actions based on proximity to specific locations. SriGeo.js opens up possibilities for location-based gaming, personalized marketing, and smart city applications.

## Features

- **Location Tracking**: Track and monitor the user's current location in real-time.
- **Geofencing**: Create virtual boundaries around specific locations and receive notifications when the user enters or exits these geofences.
- **Custom Actions**: Define custom actions to be triggered when the user enters or exits a geofence.
- **Distance Calculation**: Calculate the distance between two sets of latitude and longitude coordinates using the Haversine formula.
- **Error Handling**: Handle errors gracefully when retrieving geolocation information.

## Getting Started
### Installation

- You can include `SriGeo.js` in your project by downloading the script and including it in your HTML file:
```html
<script src="path/folder/srigeo.js"></script>
```
- You can install `SriGeo.js` using npm:
```shell
npm install srigeo
```
Then, you can import it into your JavaScript file:
```javascript
import SriGeo from 'srigeo';
```
- CDN
You can include `SriGeo.js` in your project by adding the following script tag to your HTML file:
```html
<script src="https://cdn.jsdelivr.net/gh/SankarSrinivasan1/SriGeo.js@main/SriGeo.js"></script>
```
By providing the specific URL for the `SriGeo.js` file hosted on the jsDelivr CDN, users can directly include the library in their projects without having to download or host the file themselves.

### Usage
To use SriGeo.js in your JavaScript project, follow these steps:

1. Import the SriGeo module:

```javascript
import SriGeo from 'sri-geo';
```

2. Instantiate a new SriGeo object:

```javascript
const geo = new SriGeo();
```

3. Start tracking the user's location:

```javascript
geo.startTracking(
  (latitude, longitude) => {
    // Handle the user's location update
    // Perform actions based on the user's location
  },
  (error) => {
    // Handle geolocation retrieval errors
  }
);
```

4. Create geofences:

```javascript
// Example geofence setup
geo.createGeofence(
  targetLatitude,
  targetLongitude,
  radius,
  () => {
    // Perform custom action when the user enters the geofence
  },
  () => {
    // Perform custom action when the user exits the geofence
  }
);
```

5. Stop tracking the user's location (optional):

```javascript
geo.stopTracking();
```

## Usage
How you can use SriGeo.js in your application:

```javascript
// Instantiate SriGeo
const geo = new SriGeo();

// Start tracking user's location
geo.startTracking(
  (latitude, longitude) => {
    console.log("User's current location:", latitude, longitude);
    // Perform actions based on the user's location
    // For example, update a map marker or display nearby points of interest
  },
  (error) => {
    console.error("Error retrieving geolocation:", error);
    // Handle the error appropriately, such as displaying an error message to the user
  }
);

// Create geofences
const targetLocations = [
  {
    latitude: 37.7749,
    longitude: -122.4194,
    radius: 1, // in kilometers
    onEnter: () => {
      console.log("User entered the geofence at location 1!");
      // Perform custom action on entering the geofence at location 1
    },
    onExit: () => {
      console.log("User exited the geofence at location 1!");
      // Perform custom action on exiting the geofence at location 1
    }
  },
  {
    latitude: 40.7128,
    longitude: -74.0060,
    radius: 0.5, // in kilometers
    onEnter: () => {
      console.log("User entered the geofence at location 2!");
      // Perform custom action on entering the geofence at location 2
    },
    onExit: () => {
      console.log("User exited the geofence at location 2!");
      // Perform custom action on exiting the geofence at location 2
    }
  }
];

targetLocations.forEach((location) => {
  geo.createGeofence(
    location.latitude,
    location.longitude,
    location.radius,
    location.onEnter,
    location.onExit
  );
});

// Stop tracking user's location (optional)
// geo.stopTracking();
```

In this example, we first create an instance of the `SriGeo` class using `const geo = new SriGeo();`.

Next, we start tracking the user's location by calling `geo.startTracking()` and passing a callback function to handle the location updates. The callback function receives the latitude and longitude of the user's current location.

You can then perform actions based on the user's location, such as updating a map marker or displaying nearby points of interest.

To create geofences, you define an array of target locations, each with its latitude, longitude, and radius. For each target location, you provide `onEnter` and `onExit` callback functions that will be triggered when the user enters or exits the geofence, respectively. Inside these callbacks, you can define custom actions to be performed.

Finally, you can optionally stop tracking the user's location by calling `geo.stopTracking()` when it is no longer needed.

This is a basic example of how you can use SriGeo.js to track user location and create geofences in your application. You can customize the implementation according to your specific requirements and integrate it into your JavaScript application.


## Compatibility

SriGeo.js relies on the Geolocation API provided by modern web browsers. Please refer to the [compatibility table](https://caniuse.com/geolocation) to ensure that the library is supported in your target browsers.

## License

SriGeo.js is released under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please contact Sankar Srinivasan at [petra.srini@gmail.com](mailto:petra.srini@gmail.com).

---

Thank you for using SriGeo.js! We hope it enhances your location-aware applications and opens up exciting possibilities for geolocation-based functionality.
