'use strict';
import { useState } from 'react';
import { FakeAPI } from '../../data.mjs';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';
import TabButton from '../TabButton/TabButton';

export default function Examples() {
  const [selected, setSelected] = useState(null),
    setSelectedButton = (data) => setSelected(data);

  const tabContent = !selected ? (
    <p>Please, select one of the tabs.👆</p>
  ) : (
    <Section id="tab-content">
      <h3>{FakeAPI[selected].title}</h3>
      <p>{FakeAPI[selected].description}</p>
      <pre>
        <code>{FakeAPI[selected].code}</code>
      </pre>
    </Section>
  );

  return (
    <>
      <Section id="examples">
        <Tabs
          // ButtonComponent={CustomComponent}
          ButtonComponent="menu"
          buttonsJSX={
            <>
              <TabButton
                isSelected={selected === 'components'}
                onClick={() => setSelectedButton('components')}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selected === 'jsx'}
                onClick={() => setSelectedButton('jsx')}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selected === 'props'}
                onClick={() => setSelectedButton('props')}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selected === 'state'}
                onClick={() => setSelectedButton('state')}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
