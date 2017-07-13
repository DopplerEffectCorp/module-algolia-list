import {Component, Input, OnInit, ViewContainerRef, ViewChild, ComponentRef} from '@angular/core';

@Component({
    selector: 'de-algolia-list',
    templateUrl: './algolia-list.component.html',
    styleUrls: ['./algolia-list.component.scss']
})
export class AlgoliaListComponent implements OnInit {

    @Input() algoliaHelper;
    @Input() headerComponent: Component;
    @Input() singleElementComponent: Component;
    @Input() pagerComponent: Component;
    @Input() set queryString(val: string) {
        val = val || '';
        this.algoliaHelper.setQuery(val).search();
    };

    @ViewChild("list", { read: ViewContainerRef }) listContainer;
    listContainerRef: ComponentRef<any>;

    private hitsPerPage: number = 9;

    constructor() {
        this.initHelper();
    }

    ngOnInit() {
    }

    initHelper() {
        this.algoliaHelper.setQueryParameter('hitsPerPage', this.hitsPerPage).search();
        this.algoliaHelper.on('result', (value) => {
            console.log('valueIN', value.hits);
        });
    }

}
