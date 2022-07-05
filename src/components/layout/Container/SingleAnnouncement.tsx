import React, { useEffect, useState } from "react";
import { AnnouncementEntity } from "types";
import { apiUrl } from "../../../config/api";

interface Props {
  id: string;
}

export const SingleAnnouncement = (props: Props) => {
  const [announcement, setAnnouncement] = useState<AnnouncementEntity | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/announcements/${props.id}`);
      const announcement = await res.json();

      setAnnouncement(announcement);
    })();
  }, []);

  if (announcement === null) {
    return <p>Wczytywanie...</p>;
  }

  return (
    <>
      <h2>{announcement.name}</h2>
      <p>{announcement.description}</p>
      {!!announcement.price && (
        <p>
          <b>{announcement.price} zł</b>
        </p>
      )}
      <hr />
      <a href={announcement.url} target={"_blank"}>
        Otwórz ogłoszenie
      </a>
    </>
  );
};
