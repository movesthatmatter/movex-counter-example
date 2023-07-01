import { useMovexBoundResourceFromRid } from 'movex-react';
import React from 'react';
import movexConfig from './movex.config';
import { ResourceIdentifier } from 'movex';

type Props = {
  rid: ResourceIdentifier<'counter'>;
};

export const Counter: React.FC<Props> = (props) => {
  const counter = useMovexBoundResourceFromRid(movexConfig, props.rid);

  if (!counter) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => {
          counter.dispatch({
            type: 'increment',
          });
        }}
      >
        Increment
      </button>
      <h1>{counter.state.count}</h1>
      <button
        onClick={() => {
          counter.dispatch({
            type: 'decrement',
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
