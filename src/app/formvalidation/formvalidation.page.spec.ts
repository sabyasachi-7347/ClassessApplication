import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormvalidationPage } from './formvalidation.page';

describe('FormvalidationPage', () => {
  let component: FormvalidationPage;
  let fixture: ComponentFixture<FormvalidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvalidationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormvalidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
