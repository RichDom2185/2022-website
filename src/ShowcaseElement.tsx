type Props = {
  title: string,
  tags: string[],
  year: string,
  description: string,
  github?: string,
};

const ShowcaseElement = (props: Props) => {
  return (
    <div className="showcase-element">
      <h2>{props.title}</h2>
      <span>{props.year}</span>
      {props.github && <a href={props.github}>GitHub</a>}
      <div className="tags">
        {props.tags.map(tag => <span key={tag}>{tag} </span>)}
      </div>
    </div>
  );
};

export default ShowcaseElement;