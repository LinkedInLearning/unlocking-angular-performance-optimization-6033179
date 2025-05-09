# Unlocking Angular: Performance Optimization
This is the repository for the LinkedIn Learning course `Unlocking Angular: Performance Optimization`. The full course is available from [LinkedIn Learning][lil-course-url].

_See the readme file in the main branch for updated instructions and information._
## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter.
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:

    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
	- [list of requirements for course]
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. [Course-specific instructions]


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: http://

## Links to More Info

### Introduction

#### What you should know

- https://www.linkedin.com/learning/angular-essential-training-22884621
- https://www.linkedin.com/learning/angular-testing-and-debugging-10201318

#### Using the example code and codespaces

- https://docs.github.com/en/codespaces/overview

### Performance Metrics and Tools

#### Common performance metrics

- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/
- https://web.dev/articles/defining-core-web-vitals-thresholds
- https://web.dev/articles/user-centric-performance-metrics

#### Lighthouse overview

- https://developer.chrome.com/docs/lighthouse/overview/
- https://pagespeed.web.dev/
- https://googlechrome.github.io/lighthouse/scorecalc/

#### Angular DevTools overview

- https://angular.dev/tools/devtools

### Performance Optimizations

#### Common configuration tweaks

- https://angular.dev/reference/configs/angular-compiler-options
- https://angular.dev/reference/configs/workspace-config#alternate-build-configurations
- https://angular.dev/reference/configs/workspace-config#optimization-configuration
- https://angular.dev/tools/cli/aot-compiler
- https://angular.dev/tools/cli/build#configuring-browser-compatibility
- https://angular.dev/tools/cli/build#configuring-size-budgets
- https://www.typescriptlang.org/tsconfig/#target
- https://angular.dev/reference/configs/angular-compiler-options

#### Component view encapsulation

- https://angular.dev/api/core/ViewEncapsulation
- https://angular.dev/guide/components/styling
- https://specificity.keegan.st/
- https://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/

#### Skipping change detection on component subtrees

- https://angular.dev/best-practices/skipping-subtrees
- https://angular.dev/guide/signals

#### Fine-tuning state management

- https://angular.dev/api/core/input
- https://angular.dev/api/core/output
- https://angular.dev/guide/signals
- https://github.com/papers-we-love/papers-we-love/blob/main/design/out-of-the-tar-pit.pdf

#### Optimizing slow computations

- https://angular.dev/best-practices/slow-computations
- https://angular.dev/guide/templates/pipes
- https://en.wikipedia.org/wiki/Lazy_evaluation
- https://en.wikipedia.org/wiki/Memoization
- https://web.dev/articles/optimize-input-delay
- https://web.dev/articles/optimize-long-tasks

#### Defer loading with defer blocks

- https://angular.dev/guide/templates/defer

#### Detecting and preventing memory leaks

- https://angular.dev/api/common/AsyncPipe
- https://angular.dev/api/core/rxjs-interop/takeUntilDestroyed
- https://angular.dev/api/core/rxjs-interop/toSignal
- https://github.com/papers-we-love/papers-we-love/blob/main/design/out-of-the-tar-pit.pdf
- https://developer.chrome.com/docs/devtools/memory

#### Enhancing router performance

- https://angular.dev/guide/routing
- https://angular.dev/api/router/provideRouter
- https://angular.dev/api/router/withPreloading

#### Optimizing forms and reactive forms

- https://angular.dev/guide/forms
- https://www.linkedin.com/learning/angular-on-the-go-large-scale-projects
- https://web.dev/learn/forms/validation

#### Optimizing images

- https://angular.dev/guide/image-optimization

#### Avoiding zone pollution

- https://angular.dev/api/core/ChangeDetectionStrategy
- https://angular.dev/api/core/ChangeDetectorRef
- https://angular.dev/best-practices/zone-pollution

#### Angular without ZoneJS (Zoneless)

- https://angular.dev/guide/experimental/zoneless

#### Boost UX with the app shell pattern

- https://angular.dev/cli/generate/app-shell
- https://angular.dev/ecosystem/service-workers/app-shell
- https://angular.dev/guide/prerendering
- https://angular.dev/guide/ssr
- https://web.dev/articles/vitals

### Code Architecture Patterns

#### Reduce bundle size with tree-shakeable providers

- https://angular.dev/guide/di/lightweight-injection-tokens
- https://angular.dev/api/core/InjectionToken

#### Isolating injectors within hierarchies

- https://angular.dev/guide/di

#### Keeping the main thread clear with web workers

- https://angular.dev/ecosystem/web-workers
- https://web.dev/articles/off-main-thread
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

#### Achieving offline first with service workers

- https://alistapart.com/article/offline-first/
- https://angular.dev/ecosystem/service-workers
- https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
- https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace
- https://web.dev/articles/offline-cookbook
- https://web.dev/learn/pwa/service-workers

#### Get data instantly with client-side caching

- https://jakearchibald.com/2014/offline-cookbook/
- https://web.dev/articles/bfcache
- https://web.dev/articles/offline-cookbook
- https://web.dev/articles/persistent-storage
- https://web.dev/articles/storage-for-the-web
- https://web.dev/learn/pwa/offline-data
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

#### Balancing security with performance

- https://angular.dev/best-practices/security
- https://developer.mozilla.org/en-US/docs/Web/Security
- https://passkeys.dev/
- https://passkeys.io/
- https://web.dev/explore/secure

#### Gain more control with Angular Refs

- https://angular.dev/api/

### Conclusion

#### A deeper look at Angular

- https://angular.dev/
- https://developer.mozilla.org/
- https://github.com/angular
- https://github.com/papers-we-love/papers-we-love/blob/main/design/out-of-the-tar-pit.pdf
- https://ocaml.org/
- https://typescriptlang.org/
- https://web.dev/
- https://www.haskell.org/
- https://www.linkedin.com/learning/instructors/derek-peruo
- https://www.rust-lang.org/
