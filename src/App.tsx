import React, { useMemo } from 'react';
import './App.css';
import { MovexProvider } from 'movex-react';
import movexConfig  from './movex.config';
import { toRidAsStr, ResourceIdentifier } from 'movex';
import { Counter } from './Counter';
import { initialCounterState } from './counter.movex';

function App() {
  const counterRid = useMemo(() => {
    const params = new URL(window.location as any).searchParams;
    return params.get('rid') as ResourceIdentifier<'counter'>;
  }, [window.location.href]);

  return (
    <MovexProvider
      movexDefinition={movexConfig}
      socketUrl="localhost:3333"
      onConnected={(instance) => {
        console.log('Movex Connected');

        if (!counterRid) {
          instance
            .register('counter')
            .create(initialCounterState)
            .map((counterResource) => {
              window.location.href += `?rid=${toRidAsStr(counterResource.rid)}`;
            });
        }
      }}
    >
      <div className="App" style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {counterRid && <Counter rid={toRidAsStr(counterRid)} />}
      </div>
    </MovexProvider>
  );
}

export default App;