import React, { useState } from "react";
import s from "./sheet.module.css";

export default function Sheet({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${s.sheet} ${isOpen ? s.open : ""}`}>
      {React.Children.map(children, (child) => {
        if (child.type.displayName === 'SheetTrigger' || child.type.displayName === 'SheetContent') {
            return React.cloneElement(child, { setIsOpen });
          }
          return child;
      })}
    </div>
  )
}
