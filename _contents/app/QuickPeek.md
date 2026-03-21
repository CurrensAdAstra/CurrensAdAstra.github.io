---
title: "QuickPeek"
category: "app"
lang: en
translation_key: quickpeek
---

# QuickPeek – macOS Image Viewer

QuickPeek is a simple and fast image viewer designed for macOS and Apple hardware.

## Key Features

- Supports multiple image formats: jpg, jpeg, png, gif, bmp, webp
- View images directly inside ZIP archives
- Intuitive keyboard shortcuts
- File information display
- Drag-and-drop support

## Keyboard Shortcuts

| Shortcut | Action |
|---------|--------|
| Tab | Show / hide menu |
| Left / Up Arrow | Previous image |
| ~ | Show file information at the top-left corner |
| Right / Down Arrow, Spacebar | Next image |
| [ | Previous image (ZIP mode: previous ZIP file) |
| ] | Next image (ZIP mode: next ZIP file) |
| ESC | Quit application |
| Cmd+O | Open file |

## ZIP File Handling

QuickPeek can directly display images stored inside ZIP files.

- When a ZIP file is opened, all image files inside are automatically loaded.
- If a ZIP file contains no images, the app automatically attempts to open the next ZIP file.
- In ZIP mode, use the `[` and `]` keys to navigate between ZIP files.

## System Requirements

- macOS 26.0 or later
- Apple Silicon (M1 / M2 / M3) or Intel Mac

## Installation & Running

1. Clone this repository:
   ```bash
   git clone [repository-url]
   ```

2. Open the project in Xcode:
   ```bash
   open QuickPeek.xcodeproj
   ```

3. Build and run the app in Xcode (Cmd+R).

## Usage

1. Launch the application.
2. Click the "Open File" button or press `Cmd+O` to open an image.
3. You can also drag and drop image files into the app window.
4. Navigate through images using keyboard shortcuts.

## Development

QuickPeek is developed using SwiftUI and leverages the following technologies:

- SwiftUI: User interface
- UniformTypeIdentifiers: File type identification
- Foundation: File system and ZIP handling

## License

[License information]
