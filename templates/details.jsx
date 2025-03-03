import React, { useEffect, useState } from 'react';
import { templates, classes } from 'core/js/reactHelpers';

export default function Details({ _items = [], onSelectedItem, ...props }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const selectedItem = _items[selectedItemIndex] || {};
  const [isAnimating, setIsAnimating] = useState(selectedItem._isActive);
  const { _propsColumns } = props;
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);
  const setSelectedItem = (index) => {
    setSelectedItemIndex(index);
    onSelectedItem(_items[index]);

    setIsAnimating(true);
  };
  return (
    <div className='component__inner details__inner'>
      <templates.header {...props} />
      {_items.length > 0 && (
        <div className={classes(['component__widget details__widget', selectedItem && selectedItem._classes, isAnimating && 'is-animating'])}>
          <templates.detailsHeader items={_items} setSelectedItem={setSelectedItem} selectedItemIndex={selectedItemIndex} />

          <templates.detailsItem selectedItem={selectedItem} propsColumns={_propsColumns} />
          <templates.detailsNav
            items={_items}
            setSelectedItem={setSelectedItem}
            selectedItemIndex={selectedItemIndex}
            setSelectedItemIndex={setSelectedItemIndex}
          />
        </div>
      )}
    </div>
  );
}
