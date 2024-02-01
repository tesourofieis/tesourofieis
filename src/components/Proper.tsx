import { useEffect, useState } from "react";
import type { VISIBLE_SECTIONS } from "../lib/constants";
import { yyyyMMDD, type ProperDay } from "../lib/utils";
import Loading from "./Loading";

export default function Proper({
  section,
}: {
  section?: (typeof VISIBLE_SECTIONS)[number];
}) {
  const [proper, setProper] = useState<ProperDay>();

  const date = yyyyMMDD(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/missal/dia/${date}.json`);
        const result = await response.json();
        setProper(result.proper);
      } catch (error) {
        console.error(true);
      }
    };
    fetchData();
  }, []);

  if (!proper)
    return (
      <div className="mt-2 flex flex-col justify-center items-center">
        <p> A gerar...</p>
        <Loading />
      </div>
    );

  if (!section) {
    return <h2>{proper?.info.title}</h2>;
  }

  return (
    <>
      {proper?.sections
        .filter(({ id }) => id === section)
        .map((section) => (
          <div key={section?.id}>
            <h2
              className="text-center text-red-500"
              id={section?.id.toLowerCase()}
            >
              {section?.id}
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <span className="">
                {section?.body?.latin?.map((text, i) => (
                  <p
                    key={`latin-${section.id}-${i}`}
                    className="text-justify my-2"
                  >
                    {text}
                  </p>
                ))}
              </span>
              <span className="">
                {section?.body?.vernacular?.map((text, i) => (
                  <p
                    key={`vernacular-${section.id}-${i}`}
                    className="text-justify my-2"
                  >
                    {text}
                  </p>
                ))}
              </span>
            </div>
          </div>
        ))}
    </>
  );
}
