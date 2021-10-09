function addItems() {
  for (let i = 0; i < 20; i++) {
    FileList.prepend(createListItemLoad());
  }
  FileList.scrollTo(0, 800);
}

function createListItemLoad() {}
