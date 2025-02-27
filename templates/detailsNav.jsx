import React from 'react';
import { classes } from 'core/js/reactHelpers';
import Adapt from 'core/js/adapt';

export default function DetailsNav({ items, selectedItemIndex, setSelectedItemIndex, setSelectedItem }) {
  const ariaLabels = Adapt.course.get('_globals')._accessibility._ariaLabels;
  const nextLabel = ariaLabels.next || 'Next';
  const previousLabel = ariaLabels.previous || 'Previous';
  const shouldEnableBack = selectedItemIndex > 0;
  const shouldEnableNext = selectedItemIndex < items.length - 1;
  const nextItem = () => {
    setSelectedItemIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % items.length;
      setSelectedItem(newIndex);
      return newIndex;
    });
  };

  const prevItem = () => {
    setSelectedItemIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + items.length) % items.length;
      setSelectedItem(newIndex);
      return newIndex;
    });
  };
  return (
    <div className='details__item-nav-container'>
      <button
        onClick={prevItem}
        className={classes(['details__item-nav-btn details__item-nav-prev btn-icon', !shouldEnableBack && 'is-disabled'])}
        aria-disabled={!shouldEnableBack || null}
      >
        <span className='aria-label' dangerouslySetInnerHTML={{ __html: previousLabel }} />
        <span className='icon' aria-hidden='true' />
      </button>
      <div className='details__item-nav-indicator'>
        <span>
          {selectedItemIndex + 1} / {items.length}
        </span>
      </div>
      <button
        onClick={nextItem}
        className={classes(['details__item-nav-btn details__item-nav-next btn-icon', !shouldEnableNext && 'is-disabled'])}
        aria-disabled={!shouldEnableNext || null}
      >
        <span className='aria-label' dangerouslySetInnerHTML={{ __html: nextLabel }} />
        <span className='icon' aria-hidden='true' />
      </button>
    </div>
  );
}
