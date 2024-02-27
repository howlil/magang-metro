import { Menu } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import SheetTrigger from "../../../components/Sheet/SheetTrigger";
import Sheet from "../../../components/Sheet/Sheet";
import SheetContent from "../../../components/Sheet/SheetContent";

export default function MobileSidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
}
