// @ts-check

(function () {
  //@ts-ignore
  const vscode = acquireVsCodeApi();

  const mainContainer = /** @type {HTMLElement} */ (
    document.querySelector('#maincontent')
  );
  const mediaDialog = /** @type {HTMLElement} */ (
    document.querySelector('#mediaDialog')
  );

  function updateContent(/**@type {string} */ text) {
    mainContainer.innerText = text;
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
      case 'updateMedia':
        const html = message.html;
        mediaDialog.innerHTML = html;
        return;
    }
  });

  // リロード時などに更新する
  const state = vscode.getState();
  if (state) {
    updateContent(state.text);
  }
})();
