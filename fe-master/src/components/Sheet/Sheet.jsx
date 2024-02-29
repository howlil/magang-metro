// Sheet.jsx
import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import styles from "./sheet.module.css";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = ({ children }) => (
  <SheetPrimitive.Trigger asChild>{children}</SheetPrimitive.Trigger>
);

const SheetContent = forwardRef(
  ({ children, side = "right", ...props }, ref) => {
    const positionClass = side === "right" ? styles.contentRight : "";
    const openClass = side === "right" ? styles.openRight : "";

    return (
      <SheetPrimitive.Portal>
        <div {...props} ref={ref} className={`${styles.overlay} ${openClass}`}>
          <SheetPrimitive.Content
            className={`${styles.content} ${positionClass}`}
          >
            {children}
            <div className={styles.contentHeader}>
              <SheetPrimitive.Close
                className={styles.closeButton}
              ></SheetPrimitive.Close>
            </div>
          </SheetPrimitive.Content>
        </div>
      </SheetPrimitive.Portal>
    );
  }
);

SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetContent };
