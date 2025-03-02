# Liquid Sigil Extension for VS Code

This extension provides syntax highlighting for Liquid template language within Elixir's custom sigil: `~LIQUID`.

## Features

- Syntax highlighting for the following sigil in Elixir files:
  - `~LIQUID` - General purpose Liquid templates
- Support for all Liquid syntax features including:
  - Output tags: `{{ variable }}`
  - Logic tags: `{% if condition %}...{% endif %}`
  - Loops: `{% for item in collection %}...{% endfor %}`
- Works with all sigil delimiters: quotes, heredocs, brackets, parentheses, and curly braces

## Examples

```elixir
# With double quotes
template = ~LIQUID"Hello, {{ name }}!"

# With heredoc
template = ~LIQUID"""
{% if user %}
  Hello, {{ user.name }}!
{% else %}
  Hello, guest!
{% endif %}
"""

# With brackets
template = ~LIQUID[{% for item in items %}{{ item }}{% endfor %}]

# With parentheses
template = ~LIQUID(Hello, my name is {{ name }})
```

## Installation

1. Install the extension from the VS Code Marketplace
2. Open an Elixir file containing the LIQUID sigil
3. The content inside the sigil will be highlighted

## Color Customization

To get purple text (similar to HEEX) inside the sigils, add the following settings to your VS Code settings:

1. Open Settings (File > Preferences > Settings)
2. Click on "Edit in settings.json" (top-right corner)
3. Add the following configuration:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": "markup.raw.liquid-text",
      "settings": {
        "foreground": "#C678DD" // Purple color for normal text
      }
    }
  ]
}
```

For more elaborate color customization, check the included `custom-colors.jsonc` file.

## Requirements

- VS Code 1.25.0 or higher

## License

MIT
