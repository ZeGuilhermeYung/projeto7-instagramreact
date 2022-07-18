export default function IconsClick(props) {
  return (
    <a href={props.link}>
      <ion-icon name={props.visibleIcon} alt={props.alt}></ion-icon>
      <ion-icon name={props.activeIcon} alt={props.alt}></ion-icon>
    </a>
  );
}