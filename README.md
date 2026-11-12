# GUI-Portfolio-Template

[![W3C HTML Validation](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/html-validation.yml/badge.svg)](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/html-validation.yml)
[![Accessibility Check](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/accessibility.yml/badge.svg)](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/accessibility.yml)
[![CSS Check](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/css-check.yml/badge.svg)](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/css-check.yml)
[![Link Check](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/link-check.yml/badge.svg)](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/link-check.yml)
[![Lighthouse Report](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/IDBCourses/kd401b-a3-template/actions/workflows/lighthouse.yml)

Template for a portfolio project in the GUIs course.

## Automatic checks

Every time you push to `main`, four checks and a Lighthouse report run automatically on GitHub. Their results are shown by the badges at the top of this page: green means passing, red means something needs fixing.

**Make sure all four checks pass before you hand in your portfolio.**

### W3C HTML Validation

Checks every `.html` file in your repository, including pages in subfolders, with the official W3C Nu HTML Checker. It catches things like unclosed or misnested tags, missing required attributes, duplicate `id`s and invalid elements.

### Accessibility Check

Opens every page in a browser and tests it against WCAG 2 level AA using pa11y and the axe engine. It catches things like images without alt text, form fields without labels, low colour contrast and missing page language. Automated tools only find some accessibility problems, so you should still test your site yourself, for example by navigating it with only the keyboard.

### CSS Check

Checks every `.css` file with Stylelint. It catches mistakes like unknown or misspelled properties, invalid values, duplicate selectors and empty blocks.

### Link Check

Checks every link and image on every page with lychee. It catches links to pages that don't exist, misspelled file names, missing images and external links that no longer work.

### Lighthouse Report

Runs Google Lighthouse on every page and scores it for performance, accessibility, best practices and SEO. This is a report, not a pass-or-fail check: use it to find ways to improve your site.

- **Latest report for `main`:** open the [`reports` branch](../../tree/reports) of your repository.
- **Report for a pull request or any run:** open the run in the Actions tab; the scores are on the run's summary page.
- **Full details:** download **lighthouse-html-reports** from the bottom of the run's summary page and open the HTML files in your browser.

The report is kept on its own branch so it never adds commits to your working branches.

## Checking your work with pull requests

The checks also run on pull requests, which lets you find out whether new work passes *before* it reaches `main`.

Why this is useful:

- Your `main` branch always stays in a working, passing state, so the version you hand in is never broken by half-finished changes.
- You can experiment freely on a separate branch without worrying about breaking your site.
- The results show up right on the pull request page, so you can see at a glance whether it's safe to merge.

How to do it:

1. Create a new branch for the change you're working on (for example `about-page`).
2. Commit and push your work to that branch.
3. On GitHub, open a pull request from your branch into `main`.
4. Wait for the checks to finish. They appear at the bottom of the pull request.
5. If a check fails, click **Details** to see what went wrong, fix it on your branch and push again. The checks re-run automatically.
6. When all the checks are green, merge the pull request.

You can also run either check by hand: open the **Actions** tab, choose the workflow, and click **Run workflow**.

## Finding out what went wrong

1. Click a red badge above, or open the **Actions** tab of your repository.
2. Click the most recent failed run (marked with a red ✗).
3. Click the job, then expand the step that failed:
   - **Validate every HTML page** for HTML errors
   - **Check every HTML page** for accessibility errors
   - **Check every CSS file** for CSS errors
   - **Check links and images on every page** for broken links
4. Each error lists the file (or page), the line or element, and a description of the problem.
5. Fix the problems, commit and push again. The checks re-run automatically.

You can also check a single page while you work by pasting its code into the [W3C validator](https://validator.w3.org/#validate_by_input).
