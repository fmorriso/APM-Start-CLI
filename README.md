# APM-Start-CLI

Deborak Kurata's Angular Routing APM-Start example used in her Pluralsight course converted to use Angular-CLI 1.0.0 and Angular 4.0.3

## References

[Deborak Kurata's Angular Routing Problem Solver](http://blogs.msmvps.com/deborahk/angular-routing-problem-solver/)

[Deborah Kurata's GitHub](https://github.com/DeborahK/Angular-Routing)

## Other tools used

* Angular-CLI 1.0.0
* JetBrains WebStorm 2017.1.2
* npm-check-updates 2.11.0
* TypeScript 2.2.2

## ng build cautionary tale

I have learned the hard way to use the following for build:

```
ng build --verbose --progress --vendor-chunk --extract-css --prod
```

If you leave off `--prod`, your build may not spot all of the errors in your project.  

And yes, I will be the first to agree that putting `--prod` on `ng build` seems like overkill, but trust me, you want to find out from ng build what is wrong with your project, not `ng serve`.

You will be amazed how many errors that `ng build --prod` uncovers that `ng build` remains blissfully unware of.
 
In fact, I routinely replace the default generated `scripts` in .angular-cli.json with these:
```angular2html
    "build": "ng build --verbose --progress --vendor-chunk --extract-css",
    "build-prod": "ng build --verbose --progress --vendor-chunk --extract-css --prod",
    "start": "ng serve --open --verbose --vendor-chunk --extract-css",
    "start-prod": "ng serve --open --verbose --vendor-chunk --extract-css --prod",
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
