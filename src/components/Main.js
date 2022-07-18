import StoriesPosts from "./Main/StoriesPosts.js";
import SideBar from "./Main/SideBar.js";
import OptionsConfigs from "./Main/OptionsConfigs";

export default function Main() {
  return (
    <main>
      <StoriesPosts />
      <SideBar />
      <OptionsConfigs />
    </main>
  );
}