import { commands } from '@uiw/react-md-editor'
import { faLaptopCode, faItalic, faRectangleList, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const commandsDropdown = [
  // * CODE TOOLS 
  commands.group([
    commands.code,
    commands.codeBlock,
    commands.comment,
  ], {
    name: 'codeTools',
    groupName: 'codeTools',
    buttonProps: { 'aria-label': 'Tools to format code snippets'},
    icon: (
      <FontAwesomeIcon icon={faLaptopCode} />
    )
  }),
  // * TEXT TOOLS
  commands.group([
    commands.bold,
    commands.italic,
    commands.strikethrough,
    commands.quote,
    commands.table,
  ], {
    name: 'textTools',
    groupName: 'textTools',
    buttonProps: { 'aria-label': 'Tools to format text'},
    icon: (
      <FontAwesomeIcon icon={faItalic} />
    )
  }),
  // * LIST TOOLS
  commands.group([
    commands.unorderedListCommand,
    commands.orderedListCommand,
    commands.checkedListCommand,
  ], {
    name: 'listTools',
    groupName: 'listTools',
    buttonProps: { 'aria-label': 'Tools to format lists'},
    icon: (
      <FontAwesomeIcon icon={faRectangleList} />
    )
  }),
  // * OTHER TOOLS
  commands.group([
    commands.link,
    commands.image,
  ], {
    name: 'otherTools',
    groupName: 'otherTools',
    buttonProps: { 'aria-label': 'Tools for links and images'},
    icon: (
      <FontAwesomeIcon icon={faImages} />
    )
  }),
  commands.divider,
  commands.help,
]

const commandsExpanded = [
  // * CODE TOOLS
  commands.code,
  commands.codeBlock,
  commands.comment,
  // * TEXT TOOLS
  commands.divider,
  commands.bold,
  commands.italic,
  commands.strikethrough,
  commands.quote,
  commands.table,
  // * LIST TOOLS
  commands.divider,
  commands.unorderedListCommand,
  commands.orderedListCommand,
  commands.checkedListCommand,
  // * OTHER TOOLS
  commands.divider,
  commands.link,
  commands.image,
  // * HELP
  commands.divider,
  commands.help,
]

const extraCommands = [
  commands.codeEdit,
  commands.codeLive,
  commands.codePreview,
  commands.fullscreen
]

export {commandsDropdown, commandsExpanded, extraCommands}