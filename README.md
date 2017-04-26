# NodeBB Mermaid parser

A plugin to parse mermaid codeblocks and render them with [Mermaid](https://github.com/knsv/mermaid).

Packaged mermaid version: https://github.com/knsv/mermaid/commit/189758cca41c2535fef0758a178bce6c9be7a4c8

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
