import s from "./sheet.module.css";

const SheetContent = ({ children, setIsOpen }) => {
  return (
    <div className={s.sheetContent}>
      <button className={s.closeBtn} onClick={() => setIsOpen(false)}>
        Close
      </button>
      {children}
    </div>
  );
};

SheetContent.displayName = "SheetContent";

export default SheetContent;
