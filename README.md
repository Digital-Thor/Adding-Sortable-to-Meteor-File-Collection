#Adding Sortable to Meteor File Collection 
Work-in-Progress to re-order rows in [Meteor File Collection (MFC) Sample App](https://github.com/vsivsi/meteor-file-sample-app) 
using drag-and-drop sorting provided by [Rubaxa Sortable for Meteor](https://github.com/RubaXa/Sortable/tree/master/meteor).

## Update (12 July 2015)

Please see the [situation assessment](https://github.com/vsivsi/meteor-file-sample-app/issues/2#issuecomment-120780592) by the Meteor File Collection Author.

## Description of progress so far (11 July 2015)

I forked Meteor File Collection Sample App and added Sortable hooks by 
following instructions at [Rubaxa Sortable for Meteor](https://github.com/RubaXa/Sortable/tree/master/meteor)
including suggested approach of using `{{#sortable items=<cursor> options=myOptions}}`.  Rubaxa has created `#sortable` to replace `#each` 
and I moved the row HTML (from the MFC Sample App) into a new template called `sortableRow` as follows:

    <tbody class="sortable">
      {{#sortable items=dataEntries options=sortableOptions}}
        {{> sortableRow }}
      {{/sortable}}
    </tbody>
    
I also had to move some helpers to support the new `sortableRow` template. 
The Rubaxa Sortable Example [Demo](http://rubaxa-sortable.meteor.com/) and [Source](https://github.com/RubaXa/Sortable/tree/dev/meteor/example) provided 
some help with the integration, but the Rubaxa Sortable example used the same word "attributes" for collection names and helpers, which confused me at first. 
For clarity I've named collection names and helpers separately in this repo, but since
Meteor File Collection has a multi-faceted approach to collections, I'm not sure I'm passing collections and cursors correctly between the two packages.  
Finally, I also added two columns to the MFC Sample App.

1. One column displays the order index of each row (which should always be ascending), and
2. The final column provides a click/touch target for dragging each row up or down. 


## What works
I am able to drag one row to a new position.  Unfortunately, I then encountered the following problems. 

## Problems
### 1. Error in Client Console
Error: Uncaught TypeError: Cannot read property 'findOne' of undefined

Source: [Reactivize.js:95](https://github.com/RubaXa/Sortable/blob/master/meteor/reactivize.js#L95)

	templateInstance.adjustOrders = function adjustOrders(itemId, orderPrevItem, orderNextItem) {
	  var orderField = templateInstance.options.sortField;
	  var selector = {}, modifier = {$set: {}};
	  var ids = [];
      var startOrder = templateInstance.collection.findOne(itemId)[orderField];  // Line 95

Although `templateInstance.options` exists and yields the correct sortField, `templateInstance.collection` is undefined.

### 2. Where to put and how to update the order index
Also, the order index is not populated with values in my integration however the Rubaxa demo orders the values when items 
are added to the collection.  That seems a clue that I've not enabled `inserts` or `updates` properly, but I'm a bit lost 
in the Rubaxa code.  I've tried putting the order index at different nesting depths of the collection (as commented in my code), 
but neither level seemed to help.  Possibly it's a pub/sub problem.  As a last attempt, I set the order indices manually 
using the Mongo console and they moved appropriately in the table, but re-ordering by dragging still gave the error above.

##Please Help!
Before I cry "Uncle" and set up a relic up/down button!