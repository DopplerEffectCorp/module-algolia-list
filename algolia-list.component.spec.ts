import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoliaListComponent } from './algolia-list.component';

describe('AlgoliaListComponent', () => {
  let component: AlgoliaListComponent;
  let fixture: ComponentFixture<AlgoliaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoliaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoliaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
