import ItemsComponentModel from 'core/js/models/itemsComponentModel';

export default class DetailsModel extends ItemsComponentModel {
  checkIfResetOnRevisit() {
    this.resetActiveItems();
    super.checkIfResetOnRevisit();
    this.setFirstItem();
  }

  toggleItemsState(index) {
    const item = this.getItem(index);
    const previousActiveItem = this.getActiveItem();
    if (!item) return;
    item.toggleActive();
    item.toggleVisited(true);

    if (!previousActiveItem) return;
    previousActiveItem.toggleActive(false);
  }

  setFirstItem() {
    this.toggleItemsState(0);
  }
}
