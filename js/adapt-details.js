import components from 'core/js/components';
import DetailsView from './DetailsView';
import DetailsModel from './DetailsModel';

export default components.register('details', {
  model: DetailsModel,
  view: DetailsView
});
