import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EmployeesList } from './employees-list/employees-list';
import { EmployeesAdd} from './employees-add/employees-add';
import { EmployeesSearch } from './employees-search/employees-search';
import { EmployeesView } from './employees-view/employees-view';

 

@NgModule({
  declarations: [
    EmployeesList,
    EmployeesAdd,
    
    EmployeesSearch,
    EmployeesView
  ],
  entryComponents: [
    EmployeesList,
    EmployeesAdd,
    
    EmployeesSearch,
    EmployeesView
  ],
  imports: [
    IonicModule
  ],
})
export class EmployeeModule { }
