![NodeBB Compatibility](https://packages.nodebb.org/api/v1/plugins/nodebb-plugin-mermaid/compatibility.png)

# NodeBB Mermaid parser

A plugin to parse mermaid codeblocks and render them with [Mermaid](https://github.com/knsv/mermaid).

Packaged mermaid version: https://github.com/knsv/mermaid/commit/2fd7992b0e9edb9252ae4d34eba3f26577e36633

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
