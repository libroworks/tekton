// @ts-check

(function () {
  // @ts-ignore
  const vscode = acquireVsCodeApi();

  const notesContainer = /** @type {HTMLElement} */ (
    document.querySelector('.notes')
  );

  const addButtonContainer = document.querySelector('.add-button');
  addButtonContainer.querySelector('button').addEventListener('click', () => {
    vscode.postMessage({
      type: 'add',
    });
  });

  const errorContainer = document.createElement('div');
  document.body.appendChild(errorContainer);
  errorContainer.className = 'error';
  errorContainer.style.display = 'none';

  function updateContent(/**@type {string} */ text) {
    let json;
    try {
      if (!text) {
        text = '{}';
      }
      json = JSON.parse(text);
    } catch {
      notesContainer.style.display = 'none';
      errorContainer.innerText = 'Error:Document is not valid json';
      errorContainer.style.display = '';
      return;
    }
    notesContainer.style.display = '';
    errorContainer.style.display = 'none';

    // レンダースクラッチ
    notesContainer.innerHTML = '';
    for (const note of json.scratches || []) {
      const element = document.createElement('div');
      element.className = 'note';
      notesContainer.appendChild(element);

      const text = document.createElement('div');
      text.className = 'text';
      const textContent = document.createElement('span');
      textContent.innerText = note.text;
      text.appendChild(textContent);
      element.appendChild(text);

      const created = document.createElement('div');
      created.className = 'created';
      created.innerText = new Date(note.created).toUTCString();
      element.appendChild(created);

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.addEventListener('click', () => {
        vscode.postMessage({ type: 'delete', id: note.id });
      });
      element.appendChild(deleteButton);
    }

    notesContainer.appendChild(addButtonContainer);
  }

  // メッセージ受信
  window.addEventListener('message', (event) => {
    const message = event.data;
    switch (message.type) {
      case 'update':
        const text = message.text;
        updateContent(text);
        // vscode.getStateの返値になるらしい
        vscode.setState({ text });
        return;
    }
  });

  // リロード時などに更新する
  const state = vscode.getState();
  if (state) {
    updateContent(state.text);
  }
})();
