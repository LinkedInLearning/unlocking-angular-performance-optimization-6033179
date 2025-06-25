# Unlocking Angular: Performance Optimization

This is the repository for the LinkedIn Learning course `Unlocking Angular: Performance Optimization`. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

## Course Description

In today’s fast-paced digital world, even milliseconds can make the difference between user engagement and abandonment. This course is designed for senior engineers tasked with delivering blazing-fast, highly scalable applications under relentless pressure. Here, Derek Peruo—a senior technical lead for large-scale Angular and Ionic projects—dives deep into Angular’s internals, unveiling advanced techniques like optimizing change detection, isolating injectors, and leveraging Angular Refs to eliminate performance bottlenecks. If you're looking to gain a competitive edge by maximizing every aspect of your Angular app’s performance, this course is your roadmap to significantly leveling up your efficiency. Don't just meet user expectations—exceed them.

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

 ## Instructor

Derek Peruo

Senior Technical Lead


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/unlocking-angular-performance-optimization
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4E0DAQFRfMRnzJYcFA/learning-public-crop_675_1200/B4EZdCIOTxHIAY-/0/1749161142150?e=2147483647&v=beta&t=3WDDVm3Q1csXlL4XrHns2knLgrRtqa3nri5O6-w2ksU
