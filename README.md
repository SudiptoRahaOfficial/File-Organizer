# File Organizer

A simple Node.js utility that automatically organizes files into folders based on their file extensions.

## Overview

File Organizer helps clean up cluttered directories by scanning files and moving them into categorized folders according to their extensions. It is a beginner-friendly Node.js project that demonstrates working with the file system using core Node.js modules.

## Features

* Organizes files based on their extensions
* Automatically creates folders when needed
* Helps keep directories clean and structured
* Lightweight and easy to use

## Technologies Used

* Node.js
* File System (fs) Module
* Path Module

## Installation

1. Clone the repository:

```bash
git clone git@github.com:SudiptoRahaOfficial/File-Organizer.git
```

2. Navigate to the project directory:

```bash
cd File-Organizer
```

3. Install dependencies (if any):

```bash
npm install
```

## Usage

Put all your garbage files into clutters folder & Run the application:

```bash
node app.js
```

The program will scan the target directory and organize files into folders based on their file extensions.

## Example

Before:

```text
clutters/
├── image.jpg
├── document.pdf
├── notes.txt
├── video.mp4
```

After:

```text
organized/
├── Images/
│   └── image.jpg
├── Documents/
│   ├── document.pdf
│   └── notes.txt
└── Videos/
    └── video.mp4
```

## Learning Goals

This project was built to practice:

* Working with the Node.js File System
* Directory and file manipulation
* Path handling
* Writing modular and maintainable code

## Contributing

Contributions, suggestions, and improvements are welcome.