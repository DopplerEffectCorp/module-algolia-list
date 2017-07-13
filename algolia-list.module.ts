import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlgoliaListComponent} from "./algolia-list.component";

@NgModule({
    imports: [CommonModule],
    declarations: [AlgoliaListComponent],
    exports: [AlgoliaListComponent]
})
export class AlgoliaListModule {
}