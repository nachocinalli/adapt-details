import Adapt from 'core/js/adapt';
import React from 'react';
import { classes, compile } from 'core/js/reactHelpers';

export default function DetailsHeader({ items, selectedItemIndex, setSelectedItem }) {
  const visited = Adapt.course.get('_globals')?._accessibility?._ariaLabels.visited;
  return (
    <div className='details__header'>
      <nav className='details__header-container'>
        <div className='details__header-items'>
          {items.map(({ _index, title, _isVisited }, index) => {
            const ariaLabel = `${_isVisited ? visited + '. ' : ''}${compile(title)}`;
            return (
              <button
                key={_index}
                onClick={() => setSelectedItem(index)}
                className={classes(['details__header-items-btn btn-text', index === selectedItemIndex && 'is-active'])}
              >
                <span className='details__header-item__title'>
                  <span className='aria-label' dangerouslySetInnerHTML={{ __html: compile(ariaLabel) }} />
                  <span className='details__header-item__title-inner' aria-hidden='true' dangerouslySetInnerHTML={{ __html: compile(title) }} />
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
