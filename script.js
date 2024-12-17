function popup() {
    const popupContainer = document.createElement('div');
    popupContainer.innerHTML = `
    <div id='popupContainer'>
    <h1>New Note<h1>
    <textarea id='note-text' placeholder='Please Enter Your Text...'></textarea>
    <div id='btn-container'>
        <button id='submitBtn' onclick="createNote()">Create Your Note Here</button>
        <button id="closeBtn" onclick="closePopup()">Close</button>
    </div>
    </div>
    `;
    document.body.appendChild(popupContainer)
}

function closePopup() {
    const popupContainer = document.getElementById('popupContainer')
    if (popupContainer) {
        popupContainer.remove();
    }
}
