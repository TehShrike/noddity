Should be deployable at this point.

1. git clone https://github.com/TehShrike/noddity.git
2. npm install
3. npm run build

# Problems/todo

1. Unnecessarily high memory footprint I think?
2. Doesn't work in Safari due to lack of IndexedDB support, need to use [localstorage-down](https://github.com/No9/localstorage-down) in that case
3. Need to clean up templates on teardown/when the current post changes
4. Make the title dynamic, if possible
