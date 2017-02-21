/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageVideoPlayComponent } from './page-video-play.component';

describe('PageVideoPlayComponent', () => {
  let component: PageVideoPlayComponent;
  let fixture: ComponentFixture<PageVideoPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVideoPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVideoPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
