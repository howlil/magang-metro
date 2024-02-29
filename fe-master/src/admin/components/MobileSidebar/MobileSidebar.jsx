import { useState } from "react";
import { Menu } from "lucide-react";
import s from "../Navbar/navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/Sheet/Sheet";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className={s.btn} onClick={toggle}>
            <Menu color="#033F89" size={32} />
          </button>
        </SheetTrigger>
        <SheetContent >
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
}
