# MinGi Kyung — Personal Academic/Developer Website

This is a personal website built with GitHub Pages and Jekyll.  
It presents embedded software development and systems research content through a VS Code-inspired interface.

## Tech Stack

- Jekyll
- GitHub Pages
- Liquid template
- Custom CSS/JS

## Project Structure

```text
.
├── _config.yml
├── index.html
├── _layouts/
│   └── default.html
├── _includes/
│   ├── activity_bar.html
│   └── sidebar.html
├── _contents/
│   ├── app/
│   ├── articles/
│   ├── notes/
│   └── personal/
└── assets/
    ├── css/style.css
    └── js/main.js
```

## Local Development

### 1) Prerequisites

- Ruby (recommended: 3.x)
- Bundler

### 2) Install dependencies

```bash
bundle install
```

### 3) Run local server

```bash
bundle exec jekyll serve
```

Default URL: `http://127.0.0.1:4000`

## Content Authoring

- Write content as Markdown files under [`_contents`](./_contents).
- Front matter example:

```yaml
---
title: "My Note"
category: "notes"
---
```

The `category` field is used for sidebar/activity bar grouping.

## Deployment

This repository is intended for deployment on GitHub Pages.  
In a typical setup, pushing to the `main` branch triggers the Pages build.

## License

If no separate license is provided, this project should be considered All rights reserved.
