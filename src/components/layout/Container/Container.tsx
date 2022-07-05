import React, { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../../utils/fix-leaflet-map-icons";
import { SimpleAnnouncementEntity } from "types";
import "leaflet/dist/leaflet.css";
import "./Container.css";
import { SearchContext } from "../../../contexts/search.context";
import { SingleAnnouncement } from "./SingleAnnouncement";
import { apiUrl } from "../../../config/api";

export const Container = () => {
  const { search } = useContext(SearchContext);
  const [announcements, setAnnouncements] = useState<
    SimpleAnnouncementEntity[]
  >([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/announcements/search/${search}`);
      const { announcements } = await res.json();

      setAnnouncements(announcements);
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
        {announcements.map((announcement) => (
          <Marker
            key={announcement.id}
            position={[announcement.lat, announcement.lon]}
          >
            <Popup>
              <SingleAnnouncement id={announcement.id} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
