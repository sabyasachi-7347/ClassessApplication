import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentdashboardPage } from './studentdashboard.page';

describe('StudentdashboardPage', () => {
  let component: StudentdashboardPage;
  let fixture: ComponentFixture<StudentdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
