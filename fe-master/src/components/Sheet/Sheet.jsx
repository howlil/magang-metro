// Sheet.jsx
import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import styles from "./sheet.module.css";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = ({ children }) => (
  <SheetPrimitive.Trigger asChild>{children}</SheetPrimitive.Trigger>
);

const SheetContent = forwardRef(
  ({ children, side = "left", ...props }, ref) => {
    const positionClass = side === "left" ? "" : styles.contentRight; // Default to left, apply style for right
    const openClass = side === "left" ? "" : styles.openRight; // This might need to be adjusted if you have specific styles for opening

    return (
      <SheetPrimitive.Portal>
        <div {...props} ref={ref} className={`${styles.overlay} ${openClass}`}>
          <SheetPrimitive.Content
            className={`${styles.content} ${positionClass}`}
          >
             <div className={styles.contentHeader}>
              <SheetPrimitive.Close
                className={styles.closeButton}
              ></SheetPrimitive.Close>
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
