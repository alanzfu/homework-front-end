## State:
- input
  - githubHandle
  - formValue
- list:
  - repos
  - sort

## User Actions:
- SUBMIT_HANDLE
  * submits form value to github api
- SUBMIT_HANDLE_SUCCESS
  * successfully got handle from github
- SUBMIT_HANDLE_FAIL
  * did not find handle
- SORT
  * changes sort based on drop down for the repoList

## Components:
- InputBox
  * form for inputing github handle
  * button for submitting
- ListBox
  * contains sortbox, tiles
  - SortBox
    * dropdown of sort options
    - SortOption
  - Tile
    * Individual repo render
