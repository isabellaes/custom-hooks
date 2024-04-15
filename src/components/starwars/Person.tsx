import useFetchSWPerson from "../../hooks/useFetchSWPerson";

const Person = () => {
  const { person } = useFetchSWPerson();
  return (
    <div className="person">
      <h2>Person</h2>
      {person
        ? `Name: ${person.name}, Haircolor: ${person.hair_color}, Eyecolor: ${person.eye_color}`
        : "Loading..."}
    </div>
  );
};

export default Person;
