const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter === '') {
        input.focus();
        return; // Don't allow empty input
    }

    // Create list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set content
    li.textContent = chapter;
    deleteButton.textContent = '❌';

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append list item to list
    list.appendChild(li);

    // Clear and refocus input
    input.value = '';
    input.focus();

    // Delete logic
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });
});
