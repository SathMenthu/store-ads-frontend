import React from "react";

import "./Button.css";

interface Props {
  text: string;
}

export const Button = ({ text }: Props) => <button>{text}</button>;
