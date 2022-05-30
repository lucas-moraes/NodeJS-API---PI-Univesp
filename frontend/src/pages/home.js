import React from "react";
import Navbar from "../components/navbar";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Leaflet from "leaflet";
import myPin from "../assets/pin_my_loc.png";
import ongPin from "../assets/pin_ongs.png";
import { ChangeSearchLocation } from "../services/api";

const pin_my_location = new Leaflet.icon({
  iconUrl: myPin,
  iconSize: [25, 25],
});

const pin_ong_location = new Leaflet.icon({
  iconUrl: ongPin,
  iconSize: [25, 25],
});

export default function Home() {
  const [address, setAddress] = React.useState("");
  const [respAddresses, setRespAddresses] = React.useState("");
  const [location, setLocation] = React.useState({
    lat: -23.5502001,
    lng: -46.6342571,
    zoom: 11,
  });

  React.useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 15,
        });
      });
    } catch (error) {
      setLocation({
        lat: -23.5502001,
        lng: -46.6342571,
        zoom: 12,
      });
    }
  }, []);

  const OnChangeSearchLocation = (address) => {
    if (address.length > 7) {
      ChangeSearchLocation(address)
        .then((response) => response.data)
        .then((data) => {
          setRespAddresses(data?.features);
        });
    }
  };

  function MyMap() {
    const map = useMap();
    map.flyTo([location.lat, location.lng], location.zoom);
  }

  return (
    <>
      <Navbar
        responseSearch={respAddresses}
        clearAddress={(value) => {
          setAddress(value);
          setRespAddresses("");
        }}
        searchOnChange={(value) => {
          setAddress(value);
          OnChangeSearchLocation(address);
        }}
        selectedLocal={(value) => {
          setAddress(value);
          setLocation(value);
          setRespAddresses("");
        }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="sm:text-center lg:text-left">
          <div style={{ height: "80vh" }}>
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={location.zoom}
              style={{ with: "100%", height: "100%" }}
            >
              <MyMap />
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
              />
              <Marker
                position={[location.lat, location.lng]}
                icon={pin_my_location}
              >
                <Popup>Sua Localização</Popup>
              </Marker>

              <Marker
                key={2}
                position={[-23.5806971, -46.5229319]}
                icon={pin_ong_location}
              >
                <Popup>OngA</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </main>
    </>
  );
}
