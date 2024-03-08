// Sheet.jsx
import  { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import styles from "./sheet.module.css";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = ({ children }) => (
  <SheetPrimitive.Trigger asChild>{children}</SheetPrimitive.Trigger>
);

const SheetContent = forwardRef(
  ({ children, side = "left", isOpen, ...props }, ref) => {
    const positionClass = side === "left" ? "" : styles.contentRight; // Default to left, apply style for right
    const overlayShowClass = isOpen ? styles.show : '';
    const contentOpenClass = isOpen ? 'open' : '';

    return (
      <SheetPrimitive.Portal>
        <div {...props} ref={ref} className={`${styles.overlay} ${overlayShowClass}`}>
          <SheetPrimitive.Content
            className={`${styles.content} ${positionClass} ${contentOpenClass}`}
          >
            <div className={styles.contentHeader}>
              <SheetPrimitive.Close
                className={styles.closeButton}
              >
                <span className={styles.stik}></span>
                <span className={styles.stik}></span>
              </SheetPrimitive.Close>
            </div>
            {children}
          </SheetPrimitive.Content>
        </div>
      </SheetPrimitive.Portal>
    );
  }
);



SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetContent };
