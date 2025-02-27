import React, { useState } from 'react';
import { templates, classes, compile } from 'core/js/reactHelpers';

export default function DetailsItems({ selectedItem }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  console.log(selectedItem?._categories);
  return (
    <div className='details__item-container'>
      <div className='details__item-container-inner'>
        <templates.image
          {...selectedItem._categories[selectedCategoryIndex]?._graphic}
          classNamePrefixes={['component-item', 'details-item']}
          attributionClassNamePrefixes={['component', 'details']}
        />
        <div className='details__item-content'>
          <div className='details__item-content-inner'>
            {selectedItem.title && <div className='details__item-title'>{selectedItem.title}</div>}
            {selectedItem._categories[selectedCategoryIndex]?.body && (
              <div
                className='details__item-body'
                dangerouslySetInnerHTML={{ __html: compile(selectedItem._categories[selectedCategoryIndex].body) }}
              />
            )}

            <div className='details__item-categories'>
              {selectedItem?._categories.map(({ title }, index) => (
                <button
                  key={title}
                  onClick={() => setSelectedCategoryIndex(index)}
                  className={classes(['details__item-categories-btn btn-text', index === selectedCategoryIndex && 'is-active'])}
                >
                  <span className='details__item-categories__title'>
                    <span className='aria-label' dangerouslySetInnerHTML={{ __html: compile(title) }} />
                    <span className='details__item-categories__title-inner' aria-hidden='true' dangerouslySetInnerHTML={{ __html: compile(title) }} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='details__item-props'>
        {selectedItem?._props.map((prop) => (
          <div key={prop.label} className='details__item-props-container'>
            <div className='details__item-props-label'>{prop.label}</div>
            <div className='details__item-props-value'>{prop.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
