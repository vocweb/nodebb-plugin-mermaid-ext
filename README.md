# NodeBB Mermaid parser

A plugin to parse mermaid codeblocks and render them with [Mermaid](https://github.com/knsv/mermaid). Now updated to support NodeBB v2.0.0+

Packaged mermaid version: `^9.1.1`

## Installation 

`npm install nodebb-plugin-mermaid`

## Usage

Make sure the nodebb-plugin-markdown feature `Automatically detect and highlight code blocks` has been enabled.

Write a valid mermaid graph within a post as a code block:

\`\`\`mermaid  
graph TD;  
    A-->B;  
    A-->C;  
    B-->D;  
    C-->D;  
\`\`\`

## Contributions

This software also uses portions of the following projects:

| Project             | Copyright                          |
| ------------------- | ---------------------------------- |
| nodebb-plugin-katex | Copyright (c) 2015 Benjamin Abel.  |
| mermaid             | Copyright (c) 2014 Knut Sveidqvist |
