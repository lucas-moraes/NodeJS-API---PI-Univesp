import React from "react";
import Navbar from "../components/navbar";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import myPin from "../assets/pin_my_loc.png";
import ongPin from "../assets/pin_ongs.png";



const initialPosition = { lat: -23.5503099, lng: -46.6342009 };


const pin_my_location = new Leaflet.icon( {
    iconUrl: myPin,
    iconSize: [ 25, 25 ]
} );

const pin_ong_location = new Leaflet.icon( {
    iconUrl: ongPin,
    iconSize: [ 25, 25 ]
} );




export default function Home () {

    const [ location, setLocation ] = React.useState( initialPosition );

    React.useEffect( () => {

        try
        {
            navigator.geolocation.getCurrentPosition(
                ( position ) => { setLocation( { lat: position.coords.latitude, lng: position.coords.longitude } ); }
            );
        } catch ( error )
        {
            console.log( "Não pe possível localizar" );
        }
    }, [] );

    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:text-center lg:text-left">
                    <div style={ { height: "80vh" } }>
                        {/* <MapContainer
                            center={ [ location.lat, location.lng ] } zoom={ 12 } style={ { with: "100%", height: "100%" } }>
                            <TileLayer
                                url={ `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${ process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX }` }
                            />
                            <Marker
                                position={ [ location.lat, location.lng ] }
                                icon={ pin_my_location }
                            >
                                <Popup>
                                    Sua Localização
                                </Popup>
                            </Marker>

                            <Marker
                                key={ 2 }
                                position={ [ -23.5808015, -46.5250603 ] }
                                icon={ pin_ong_location }
                            >
                                <Popup>
                                    OngA
                                </Popup>
                            </Marker>
                        </MapContainer> */}
                    </div>
                </div>
            </main>


        </>
    );
}
