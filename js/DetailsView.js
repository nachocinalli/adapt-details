import ComponentView from 'core/js/views/componentView';

class DetailsView extends ComponentView {
  preRender() {
    this.onSelectedItem = this.onSelectedItem.bind(this);
  }

  postRender() {
    this.setReadyStatus();
    this.$('.component__widget').imageready(() => {
      this.setReadyStatus();
    });
    if (this.model.get('_setCompletionOn') === 'inview') {
      this.setupInviewCompletion('.component__widget');
    }
  }

  onSelectedItem(selectedItem) {
    this.model.toggleItemsState(selectedItem._index);
  }
}

DetailsView.template = 'details.jsx';

export default DetailsView;
