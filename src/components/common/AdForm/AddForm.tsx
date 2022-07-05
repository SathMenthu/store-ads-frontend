import React, { SyntheticEvent, useState } from "react";
import "./AddForm.css";
import { Btn } from "../Button/Btn";
import { geocode } from "../../../utils/geocoding";
import { apiUrl } from "../../../config/api";
export const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    url: "",
    address: "",
  });

  const saveAnnouncement = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { lat, lon } = await geocode(form.address);

      const res = await fetch(`${apiUrl}/announcements`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          lat,
          lon,
        }),
      });

      const data = await res.json();
      setId(data.id);
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (key: string, value: string | number) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  if (loading) {
    return <h2>Trwa dodawanie ogłoszenia ...</h2>;
  }

  if (id) {
    return (
      <h2>
        Twoje ogłoszenie "{form.name}" zostało poprawnie dodane do serwisu pod
        ID: {id}.
      </h2>
    );
  }

  return (
    <form className={"add-form"} action={""} onSubmit={saveAnnouncement}>
      <h1>Dodawanie Ogłoszenia</h1>
      <p>
        <label>
          Nazwa: <br />
          <input
            type={"text"}
            name={"name"}
            required
            maxLength={99}
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
          />
        </label>
        <label>
          Opis: <br />
          <textarea
            name="description"
            maxLength={999}
            value={form.description}
            onChange={(e) => updateForm("description", e.target.value)}
          />
        </label>
        <label>
          Price: <br />
          <input
            type={"number"}
            name={"price"}
            required
            maxLength={99}
            value={form.price}
            onChange={(e) => updateForm("price", Number(e.target.value))}
          />{" "}
          <br />
        </label>
        <label>
          Adres URL: <br />
          <input
            type={"url"}
            name={"url"}
            maxLength={99}
            value={form.url}
            onChange={(e) => updateForm("url", e.target.value)}
          />{" "}
          <br />
        </label>
        <label>
          Adres Fizyczny na mapie: <br />
          <input
            name={"address"}
            maxLength={99}
            value={form.address}
            onChange={(e) => updateForm("address", e.target.value)}
          />{" "}
          <br />
        </label>
      </p>
      <Btn text={"Zapisz"} />
    </form>
  );
};
