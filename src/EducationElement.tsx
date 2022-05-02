type Props = {
    location: string,
    year: string,
    activities: string,
    icon: React.ReactNode,
};

const EducationElement = (props : Props) => {
  return (
      <h2>{props.location}</h2>
  );
};

export default EducationElement;