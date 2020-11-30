const addButton = document.getElementById('add-button');
const textArea = document.getElementById('text-area');
const noteList = document.getElementById('note-list');

addButton.onclick = () => {
    new Note('Note', textArea.value);
}

function Note(h2Text, pText){
    this.h2Text = h2Text;
    this.pText = pText; 
    
    let h2  = document.createElement('h2');
    h2.innerHTML = h2Text;

    let p = document.createElement('p');
    p.innerHTML = pText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger m-2';
    deleteButton.innerHTML = 'Delete Note';

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-success m-2';
    editButton.innerHTML = 'Edit Note';

    const noteContainer = document.createElement('div');
    noteContainer.className = 'col-4 jumbotron border-right' + noteList.childElementCount;

    noteContainer.appendChild(h2);
    noteContainer.append(p);
    noteContainer.append(deleteButton);
    noteContainer.append(editButton);
    noteList.appendChild(noteContainer);

    deleteButton.onclick = () =>{
       noteList.removeChild(noteContainer);
    }

    editButton.onclick = () =>{
       let newText = prompt('Edit your note: ' + p.innerHTML);
       p.innerHTML = newText;
    }
}