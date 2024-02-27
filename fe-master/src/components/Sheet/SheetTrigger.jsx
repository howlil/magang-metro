import React from "react";
import s from "./sheet.module.css";

export default function SheetTrigger({ children, setIsOpen }) {
  return (
  <div className={s.sheetTrigger} onClick={() => setIsOpen(true)}>
  {children}
</div>)
}
SheetTrigger.displayName = 'SheetTrigger';
