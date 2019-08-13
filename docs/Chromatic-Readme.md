# ChromaticQA

## Introduction to ChromaticQA [docs] - (https://docs.chromaticqa.com/)

ChromaticQA is a visual regression tool for storybook maintained by Storybook.The purpose of having chromaticQA run on all stories is to capture
unwanted visual changes introduced by every change done to the code base.This reduces the overhead on manual regression as it supports screenshot
comparisons for chrome,IE and FF.

## Running Test
ChromaticQA runs as a part of the build.The builds can be seen here (https://www.chromaticqa.com/builds?appId=5d28eb3fe163f6002046d6fa)

To run chromatic locally export the app code in bash profile(export CHROMATIC_APP_CODE=<app-code>) and run `npm run test:chromatic`

- When the tests are run first it creates the baselines screenshots unreviewed for all the browsers enabled in the settings.
- Each new build creates snapshots of the components which are compared with the baseline screenshots and unchanged ones are automatically accepted and changed ones needs review(accordingly it has to be accepted or denied).If there are new components added they are listed under new components.
- Each story has its own baseline that is tracked independently each branch. When you approve a snapshot you also update the baseline for that story.
