import React from "react";
import './styles/global.scss'
import './styles/components/input-switch.scss'

interface InputSwitchProps {
  id: string;
  checked: boolean;
}

export default function InputSwitch(props: InputSwitchProps) {
  return (
    <div className="input-switch">
      <input type="checkbox" id={props.id} defaultChecked={props.checked} />
      <label htmlFor={props.id} className="switch" >
        <span className="slider">On</span>
        <span>Off</span>
      </label>
    </div>
  )
}