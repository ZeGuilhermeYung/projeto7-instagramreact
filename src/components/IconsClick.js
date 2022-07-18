export default function IconsClick(props) {
  return (
    <a href={props.link} className="click-icons">
      <ion-icon name={props.visibleIcon} alt={props.alt}></ion-icon>
      <ion-icon className={props.class} name={props.activeIcon} alt={props.alt}></ion-icon>
    </a>
  );
}