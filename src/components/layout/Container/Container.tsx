import React, { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../../utils/fix-leaflet-map-icons";
import { SimpleAdEntity } from "types";
import "leaflet/dist/leaflet.css";
import "./Container.css";
import { SearchContext } from "../../../contexts/search.context";
import { SingleAd } from "./SingleAd";

export const Container = () => {
  const { search } = useContext(SearchContext);
  const [ads, setAds] = useState<SimpleAdEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/ad/search/${search}`);
      const { ads } = await res.json();

      setAds(ads);
    })();
  }, [search]);

  return (
    <div className="container">
      <h1>Search for: {search}</h1>
      <MapContainer center={[52.1150302, 18.8077103]} zoom={8}>
        <TileLayer
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          attribution={
            "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
          }
        />
        {ads.map((ad) => (
          <Marker key={ad.id} position={[ad.lat, ad.lon]}>
            <Popup>
              <SingleAd id={ad.id} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
