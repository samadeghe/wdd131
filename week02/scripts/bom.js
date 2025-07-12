const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// ADD‑CHAPTER flow
button.addEventListener('click', () => {
    const chapter = input.value.trim();      // .trim() removes leading/trailing whitespace

    // guard clause – ignore blank entries
    if (chapter === '') {
        input.focus();                         // return cursor to text box
        return;
    }

    // build new list item
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    list.appendChild(li);

    // reset field for next entry
    input.value = '';
    input.focus();

    // DELETE flow
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();                         // keep interface ready for next entry
    });
});
