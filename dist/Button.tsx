import React from "react";
import './styles/components/button.scss';
import './styles/global.scss'

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  class: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | undefined;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button className={`button ${props.class}`} type={props.type} onClick={props.onClick}>{props.text}</button>
  )
}