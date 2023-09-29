# Project 1 - News Homepage

This is your first project, the News Homepage. Its a simple single page application without any functionalities.
Most of the work is with CSS/SCSS and to create a few reusable components in React.
There is no navigation or any onClick logic on the buttons/links.

# Design

The design images are located in the **design** folder.
The assets (images/fonts) are located in the **assets** folder.
The style guide (font-size, colors, and breakpoints) are in the style-guide.md file. Use the colors and fonts written in it.
You will be using SASS, its installed in the project.

## Installation

Run `npm install` in the terminal from the root folder. After its done run `npm start` and go to `localhost:3000` to find your project.

## Folder Structure

Inside the **src** folder you will create your **components** folder. Each component must be put in its own folder. Example: components/komponenta-folder/index.js.
Absolute importing is configured for imports. (https://plainenglish.io/blog/why-and-how-to-use-absolute-imports-in-react)

For global style (variables, color variables, breakpoints etc) you can put them in **src/styles** folder and import them in your scss component file. For component styles you can put it in the same folder as the component (components/komponenta-folder/style.scss)

## Git

For now there are no jira/trello tasks, there will be in the in the next project.
Follow the **Tasks** part below.
For each task, from **master** branch you create `feature/task-name` branch.
Branch names should be simple and not very long (ex: feature/header, feature/landing_page-left)

When you are done with the task you create a pull request from that branch to **master**, I will explain more in details and do code-review and what to change/improve if necessary.
When the feature branch code is ready it will be merged to master. You will fetch and pull on master again then create your new branch for the new task.

Multiple commits (if available/needed) are encouraged as a practice. In bigger projects you must make a lot of commits sometimes in a branch, and that is better in case you need to revert back, cherry-pick and rebase,
easier to solve conflicts etc.

If you notice a bug/issue after a branch has been merged, you can create a new branch for the fix as `bugfix/name` that is created from master and not any other branch, then create another pull request.

Never commit and push code directly in master branch!

## Tasks

1. Header (logo left, nav links right)
2. Left side of main landing page (big image and bold text + paragraph and button below it)
3. Right side of main landing page (the dark blue part)
4. Bottom part with the articles
5. Mobile hamburger menu
6. Mobile design

## Notes

Follow the DRY Logic (Don't Repeat Yourself) - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
Create as many components as possible, re-use functions, re-use css.

The project is pre-configured which means that eslint code styling rules are enforced, prettier is configured and set to automatically format your code to be more readable (you can disable it by deleting the .vscode folder, but its recommended to format on save as most clients projects work like that).
You can take a look in the configuration files (eslint, prettier, editorconfig, git, (its a simple config but a popular one that most clients and projects use. Sometimes there are even more strict rules applied but we'll get to that))

Readable code is a must. If something is getting complicated (function/component) you should add some comments to explain it. Its just practice for now but necessary for the future.

For now just use SASS for styling, in later projects you will have more freedom to choose styling libraries and packages.

Your React code should be in JavaScript (files should end in .js or .jsx). You will learn and use TypeScript later.

And always ask if something isn't clear. Juniors(any level even Seniors) are always encouraged to ask as many questions about any doubts they have, never assume how things work because clients 99% of the time don't think as developers. If something isn't clear to you regarding design, functionalities its always better to ask.

If you have any doubts about how things are planned and designed, if you think that "this will not work like this" or "it doesn't make any sense" make a polite comment to who ever is in charge regarding what you think. Sometimes they agree with you and you can improve the logic, sometimes they force you to do it.

**Good luck and have fun :)**
