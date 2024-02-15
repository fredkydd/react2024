'use strict';
import { CoreConceptData } from '../../data.mjs';
import CoreConcept from '../CoreConcept/CoreConcept';

export default function CoreConcepts() {
  return (
    <>
      <h2>Time to get started! </h2>
      <section id="core-concepts">
        <ul>
          {/* {CoreConceptData.map((item, index) => (
              <CoreConcept
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))} */}
          {/* NEW WAY 👇 SAME AS ABOVE*/}
          {CoreConceptData.map((item, index) => (
            <CoreConcept key={index} {...item} />
          ))}
        </ul>
      </section>
    </>
  );
}
