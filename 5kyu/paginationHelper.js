// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page.
// The types of values contained within the collection/array are not relevant. 

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage; // can cause division by 0
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
    return this.itemsPerPage === 0 ? 0 : Math.ceil(this.itemCount()/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    if (pageIndex >= this.pageCount() || pageIndex < 0) // out of range
      return -1;
    else if (pageIndex === this.pageCount() - 1) { // last page
      let res = this.itemCount() % this.itemsPerPage;
      return res !== 0 ? res : this.itemsPerPage;
    }
    return this.itemsPerPage;
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1; // out of range
    return Math.floor(itemIndex / this.itemsPerPage);
	} 
}
