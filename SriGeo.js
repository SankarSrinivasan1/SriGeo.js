// SriGeo.js
// SriGeo.js is a geolocation-based JavaScript library that offers advanced location tracking and geofencing functionalities.
// Contact Sankar Srinivasan at petra.srini@gmail.com

class SriGeo {
  constructor() {
    this.watchId = null;
    this.callback = null;
    this.errorCallback = null;
  }

  startTracking(callback, errorCallback) {
    if (navigator.geolocation) {
      this.callback = callback;
      this.errorCallback = errorCallback;
      this.watchId = navigator.geolocation.watchPosition(
        this._handleSuccess.bind(this),
        this._handleError.bind(this)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  stopTracking() {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }
  _handleSuccess(position) {
    const { latitude, longitude } = position.coords;
    this.callback(latitude, longitude);
  }
  _handleError(error) {
    if (this.errorCallback) {
      this.errorCallback(error);
    }
  }

  createGeofence(latitude, longitude, radius, onEnter, onExit) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude: currentLat, longitude: currentLng } = position.coords;
        const distance = this._getDistance(
          latitude,
          longitude,
          currentLat,
          currentLng
        );
        if (distance <= radius && onEnter) {
          onEnter();
        } else if (distance > radius && onExit) {
          onExit();
          navigator.geolocation.clearWatch(watchId);
        }
      },
      (error) => {
        console.error("Error watching geolocation:", error);
      },
      options
    );
  }

  _getDistance(lat1, lng1, lat2, lng2) {
    const earthRadius = 6371; // in kilometers
    const dLat = this._degToRad(lat2 - lat1);
    const dLng = this._degToRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this._degToRad(lat1)) *
        Math.cos(this._degToRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
  }

  _degToRad(degrees) {
    return degrees * (Math.PI / 180);
  }
}
