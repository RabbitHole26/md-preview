# MD-Preview

**MD-Preview** is a Markdown editor with a built-in preview functionality. It is designed to provide a simple and efficient way for users to write and visualize Markdown content. This project is a basic yet functional tool, suitable for anyone who needs to work with Markdown.

### Key Features

* **Real-Time Preview**: Displays your Markdown rendering live as you type.
* **User Account System**: Allows users to create accounts to manage their work.
* **Snippet Management**: Enables users to store, update, delete, and rename their Markdown snippets.
* **Theme Customization**: Users can switch between light and dark themes for a better user experience.
* **Supabase Backend**: Uses Supabase to handle backend services, ensuring data is stored securely. Currently, the Supabase authentication module is leveraged to store user generated data.

### Technical Details

* **Frontend**: Build with _REACT_.
* **Backend**: Powered by _Supabase_.

### Development Status

This is a work in progress (WIP) project. While the core functionality — such as real-time preview, user account system, snippet management, theme customization, and backend integration with Supabase — is working as intended, there are still some missing features and areas that need improvement.

## Installation

To get started with MD-Preview, follow these steps:

1. Clone the repository:
      
    ```bash
    git clone <project_url>
    ```

2. Create the **.env** file in the root directory of your project:
    * You can use the provided **.env.example** file as a template.
3. Set up Supabase:
    * Create a Supabase account if you haven't already at [Supabase](https://supabase.com/).
    * Once logged in, start a new project and open it.
    * To configure your environment variables in the **.env** file:
      1. Determine your Supabase project's URL and API key. These can be found in [Project API settings](https://supabase.com/dashboard/project/_/settings/api).
      2. Define the following variables in your **.env** file:
          * <span style='color: orange'>VITE_SUPABASE_URL</span>=`<your_supabase_project_url>`
          * <span style='color: orange'>VITE_SUPABASE_KEY</span>=`<your_supabase_api_key>`

## SRC directory structure with selected elements

```
├── src
    ├── assets
    ├── components
    │   │
    │   │   ## styled input field with validation and error rendering 
    │   ├── inputs
    │   │
    ├── pages
    ├── store
    │   │
    │   │   ## Context for authentication
    │   ├── auth-context
    │   │ 
    │   │   ## Context for managing loading states
    │   ├── loading-context 
    │   │
    │   │   ## Context for handling local storage operations
    │   ├── localstorage-context 
    │   │
    │   │   ## Context for Markdown preview functionality
    │   ├── preview-context
    │   │
    │   │   ## Client utility for interfacing with Supabase
    │   ├── supabase-client 
    │   │
    │   │   ## Custom hooks for interacting with Supabase
    │   ├── supabase-hooks 
    │   │
    │   │   ## Context for managing theme customization
    │   └── theme-context 
    │   
    └── utils

```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.