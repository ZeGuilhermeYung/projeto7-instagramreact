import MainHeader from "./Header/MainHeader.js";
import MobileHeader from "./Header/MobileHeader.js";

export default function Header() {
  return (
    <header>
        <MainHeader />
        <MobileHeader />
    </header>
  );
}