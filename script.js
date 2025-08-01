window.onload = function () {
  displayNotes();
};

function addNote() {
  const noteInput = document.getElementById('noteInput');
  const noteText = noteInput.value.trim();
  if (!noteText) return;

  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(noteText);
  localStorage.setItem('notes', JSON.stringify(notes));
  noteInput.value = '';
  displayNotes();
}

function displayNotes() {
  const notesList = document.getElementById('notesList');
  notesList.innerHTML = '';
  const notes = JSON.parse(localStorage.getItem('notes')) || [];

  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `
      ${note}
      <button class="deleteBtn" onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}