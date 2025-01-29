// inline-editing.component.ts
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inline-editing',
  imports: [FormsModule, CommonModule],
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.scss'],
})
export class InlineEditingComponent {
  departments: Department[] = [];
  oldDeptObj: any;
  http = inject(HttpClient);

  ngOnInit() {
    this.getDepartment();
  }

  onEdit(item: Department) {
    item.isEdit = true;
    const strObj = JSON.stringify(item);
    const newObj = JSON.parse(strObj);
    this.oldDeptObj = newObj;
  }

  onCancel(user: Department) {
    if (user.deptId === 0) {
      this.departments.shift();
    } else {
      user.isEdit = false;
      user.deptName = this.oldDeptObj.deptName;
    }
  }

  onAdd() {
    this.departments.unshift({
      deptId: 0,
      deptName: '',
      createdDate: new Date().toString(),
      isEdit: true,
    });
  }

  onUpdate(dept: any) {
    if (dept.deptId === 0) {
      const newDept = {
        deptId: 0,
        deptName: dept.deptName,
        createdDate: new Date().toISOString().split('T')[0] + 'T00:00:00',
      };
      this.http
        .post(
          'https://freeapi.miniprojectideas.com/api/TicketsNew/CreateDepartment',
          newDept
        )
        .subscribe((res) => {
          dept.isEdit = false;
          this.getDepartment();
        });
    } else {
      this.http
        .put(
          'https://freeapi.miniprojectideas.com/api/TicketsNew/UpdateDepartment',
          dept
        )
        .subscribe((res: any) => {
          if (res.result) {
            alert('updated sussecfully');
            dept.isEdit = false;
            this.getDepartment();
          }
        });
    }
  }

  // onDelete(id: number) {
  //   console.log(id);
  //   if (id) {
  //     this.http
  //       .delete(
  //         `https://freeapi.miniprojectideas.com/api/TicketsNew/DeleteDepartment?id=${id}`
  //       )
  //       .subscribe((res: any) => {
  //         if (res.result) {
  //           alert('Deleted successfully');
  //         }
  //       });
  //   }
  // }

  getDepartment() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/TicketsNew/GetDepartments')
      .subscribe((res: any) => {
        this.departments = res.data;
        console.log(res);
      });
  }
}

export interface Department {
  deptId: number;
  deptName: string;
  createdDate: string;
  isEdit: boolean;
}
