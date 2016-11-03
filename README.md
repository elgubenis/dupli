# dupli
get the next duplicate (file-)name providing some kind of simple naming pattern and existing entries + counter

## install
```sh
$ npm install dupli --save
```

## usage
dupli(String, Array, String);
```js
const newName = dupli('copy 1 new document', [], 'copy');
// newName: copy 2 new document

const newName = dupli('new document', ['copy 2 new document', 'copy 1 new document'], 'copy');
// newName: copy 3 new document
```

## note
please note, the array of files is only used to get the highest number, the string which follows copy 2 for example is not taken in account to match the original filename passed as the first argument.
You could as well just pass copy 2, copy 3, the idea here is that the array is an array of filenames which are already duplicates of the same file which gets duplicated using dupli.

Thats due to the necesity of this module, if you need it to be taken into account just fork and add an option and merge back if you like.