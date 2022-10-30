# linked-list

The goal here was to create a (singly) linked list in Javascript with the following functions;

- `append(value)` adds a new node containing value to the end of the list
- `prepend(value)` adds a new node containing value to the start of the list
- `size()` returns the total number of nodes in the list
- `head()` returns the first node in the list
- `tail()` returns the last node in the list
- `at(index)` returns the node at the given index
- `pop()` removes the last element from the list
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false
- `find(value)` returns the index of the node containing value, or null if not found
- `toString()` returns your LinkedList objects as strings in the format: ( value ) -> ( value ) -> ( value ) -> null
- `insertAt(value, index)` inserts a new node with the provided value at the given index
- `removeAt(index)` removes the node at the given index

## Thoughts

Creating the logic for all of the above functions seemed pretty simple since the list isn't omni-directional. My solutions all ended up using either a while or for loop. I've created a pointer that starts with the head node and will loop through the list until the value is found. This could easily have been achieved using recursion but I've come to the conclusion that unless the data structure is sufficiently complex (like a graph/tree) or has enough divergent paths (like multiple chained objects containing omni-directional pathways), loops seem more practical and efficient. 