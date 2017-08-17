import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsignedinComponent } from './socialsignedin.component';

describe('SocialsignedinComponent', () => {
  let component: SocialsignedinComponent;
  let fixture: ComponentFixture<SocialsignedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialsignedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsignedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
