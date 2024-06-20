const markdownSample =
`# MD-Preview

Welcome to the **MD-Preview** demo! Here are some common markdown features you can use:

## Headings

You can create headings using the \`#\` symbol:

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

## Emphasis

You can emphasize text using *italic* or **bold** styles:

- *Italic text* with single asterisks or underscores.
- **Bold text** with double asterisks or underscores.
- ***Bold and italic text*** with triple asterisks or underscores.

## Lists

### Unordered List

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

### Ordered List

1. First item
2. Second item
    1. Subitem 2.1
    2. Subitem 2.2

## Links

You can create links to [websites](https://www.example.com) or [reference links][1].

[1]: https://www.example.com "Example Website"

## Images

You can embed images:

![Alt text](https://via.placeholder.com/150 "Placeholder Image")

## Blockquotes

> This is a blockquote. Use it to highlight a quote or information.

## Code

You can include inline code like this: \`const x = 10;\`

Or code blocks with syntax highlighting:

\`\`\`javascript
// This is a JavaScript code block
function add(a, b) {
  return a + b;
}
\`\`\`

## Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |

## Horizontal Rule

You can insert a horizontal rule using three or more hyphens, asterisks, or underscores:

---

## Task Lists

You can create task lists:

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## HTML

You can also include raw HTML if needed:

<div style="text-align: center;">
  <strong>HTML content in Markdown</strong>
</div>`

export default markdownSample