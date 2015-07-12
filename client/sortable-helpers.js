/**
 * Created by user on 7/11/2015.
 */

Template.collTest.helpers({
  sortableOptions: {
    sortField: 'order',
    animation: 100,
    handle: ".sortable-handle",
    ghostClass: "sortable-ghost",
    group: {
      name: 'collTest',
      put: true
    },
    //onAdd: function (event) {
    //  delete event.data._id; // Generate a new id when inserting in the Attributes collection. Otherwise, if we add the same type twice, we'll get an error that the ids are not unique.
    //  delete event.data.icon;
    //  event.data.type = event.data.name;
    //  event.data.name = 'Rename me (double click)'
    //},
    draggable: ".sortable-child",  // sorting appears to work without this option
    sort: true

    //event handler for reordering attributes
    //onSort: function (event) {
    //  console.log('Item %s went from #%d to #%d',
    //    event.data.name, event.oldIndex, event.newIndex
    //  );
    //}
  }
});