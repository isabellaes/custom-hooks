import { useEffect, useState } from "react";
import { SWPerson } from "../Types";

const useFetchSWPerson = () => {
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    const fetchPersons = async () => {
      const url = "https://swapi.py4e.com/api/people/1";

      try {
        const response = await fetch(url);
        const result = await response.json();

        if (!ignore) {
          setPerson(result);
        }
      } catch (error) {}
    };
    let ignore = false;
    fetchPersons();
    return () => {
      ignore = true;
    };
  }, []);

  return { person };
};
export default useFetchSWPerson;
