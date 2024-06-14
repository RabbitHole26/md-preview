# MD-Preview

**MD-Preview** is a Markdown editor with a built-in preview functionality. It is designed to provide a simple and efficient way for users to write and visualize Markdown content. This project is a basic yet functional tool, suitable for anyone who needs to work with Markdown.

### Key Features

* **Real-Time Preview**: Displays your Markdown rendering live as you type.
* **User Account System**: Allows users to create accounts to manage their work.
* **Snippet Management**: Enables users to store, update, delete, and rename their Markdown snippets.
* **Theme Customization**: Users can switch between light and dark themes for a better user experience.
* **Supabase Backend**: Uses Supabase to handle backend services, ensuring data is stored securely and can be retrieved efficiently.

### Technical Details

* **Frontend**: Build with _REACT_
* **Backend**: Powered by Supabase, providing authentication. Currently the authentication module is leveraged to store user generated data.

### Development Status

This is currently a work in progress (WIP) project. While the core functionality — such as real-time preview, user account system, snippet management, theme customization, and backend integration with Supabase — is working as intended, there are still some missing features and areas that need improvement.

## Installation

To get started with MD-Preview, follow these steps:

1. Clone the repository
2. Create the **.env** file
  * You can use the provided **.env.example** file as a template.
3. Set up Supabase
  * Create a Supabase account if you haven't already at [Supabase](https://supabase.com/).
  * Once logged in, start a new project and open it.
  * Navigate to Settings > Configuration > API within your Supabase project.
  * Copy the following values into your **.env** file from the Supabase dashboard:
    * **SUPABASE_URL**: Copy this from the 'Project URL' section.
    * **SUPABASE_API_KEY**: Copy this from the 'Project API keys' section.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.