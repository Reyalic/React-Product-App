import React from 'react'
import { useState } from 'react';

const Theme = ({themeToggler}) => {

    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(!isToggled);
        themeToggler()
    };
  return (
    <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
    </label>
  )
}

export default Theme