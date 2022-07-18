export default function MainPost(props){
  return (
    <a className="post-media" href={props.postLink}>
      <img src={props.postMedia} alt={props.altPost}/>
    </a>
  );
}