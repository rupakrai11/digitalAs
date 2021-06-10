import React, { useContext } from "react";
import Context from "../../context";
import '../../styles/languageToggler.scss'

export default function LanguageToggler() {
  const { handleSwitch } = useContext(Context);

  return (
    <div>
      EN{" "}
      <label className="switch">
        <input type="checkbox" onChange={handleSwitch} />
        <span className="slider round"></span>
      </label>{" "}
      NE
    </div>
  );
}
