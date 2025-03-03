// This is a minimal extension file
// It exists only because the VS Code packaging requires it
// The actual functionality is in the grammar files

function activate(context) {
  // This extension provides only syntax highlighting via JSON grammars
  // No additional activation code is needed
  console.log("Liquid sigil extension is now active");
}

function deactivate() {
  // Nothing to clean up
}

module.exports = {
  activate,
  deactivate,
};
