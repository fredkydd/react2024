'use strict';
import { CoreConceptData } from '../../data.mjs';
import CoreConcept from '../CoreConcept/CoreConcept';
import Section from '../Section/Section';

export default function CoreConcepts() {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {CoreConceptData.map((item, index) => (
          <CoreConcept key={index} {...item} />
        ))}
      </ul>
    </Section>
  );
}
