import IconsClick from "./IconsClick";

export default function Footer() {
  return (
    <footer>
      <IconsClick link="https://www.instagram.com/" visibleIcon="home" activeIcon="home-outline" />
      <IconsClick visibleIcon="search" activeIcon="search" />
      <IconsClick visibleIcon="add-circle-outline" activeIcon="add-circle" />
      <IconsClick link="https://www.instagram.com/accounts/activity/" visibleIcon="heart-outline" activeIcon="heart" />
      <IconsClick link="https://www.instagram.com/jovemnerd/" visibleIcon="person-outline" activeIcon="person" />
    </footer>
  );
}