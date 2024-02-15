'use strict';
import { useState } from 'react';
import { FakeAPI } from '../../data.mjs';
import TabButton from '../TabButton/TabButton';

export default function Examples() {
  const [selected, setSelected] = useState(null),
    setSelectedButton = (data) => setSelected(data);

  return (
    <>
      <section id="examples">
        <menu>
          <TabButton
            isSelected={selected === 'components'}
            selectedButton={() => setSelectedButton('components')}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selected === 'jsx'}
            selectedButton={() => setSelectedButton('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selected === 'props'}
            selectedButton={() => setSelectedButton('props')}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selected === 'state'}
            selectedButton={() => setSelectedButton('state')}
          >
            State
          </TabButton>
        </menu>
      </section>

      {!selected && <p>Please, select one of the tabs.👆</p>}
      {selected && (
        <section id="tab-content">
          <h3>{FakeAPI[selected].title}</h3>
          <p>{FakeAPI[selected].description}</p>
          <pre>
            <code>{FakeAPI[selected].code}</code>
          </pre>
        </section>
      )}
    </>
  );
}
