import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { TaskService } from 'src/app/task.service';
import { ModalComponent } from 'src/app/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-tasker',
  templateUrl: './tasker.component.html',
  styleUrls: ['./tasker.component.scss'],
})
export class TaskerComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  tasks: any = [];
  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private modalService: MdbModalService
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  async getTasks() {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res as any;
      console.log(this.tasks);
    });
  }

  createTask(title: string) {
    this.taskService.createTask(title).subscribe(async (res) => {
      this.tasks = await this.getTasks();
    });
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId).subscribe(async (res) => {
      this.tasks = await this.getTasks();
    });
  }

  updateTaskStatusChecker(values: any, taskId: string) {
    this.taskService
      .updateTaskStatus(values.currentTarget.checked, taskId)
      .subscribe(async (res) => {});
  }

  logoutAction() {
    this.authService.logout();
  }

  openModal(taskId: string, title: string) {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        taskId,
        title,
      },
    });
    this.modalRef.onClose.subscribe(() => {
      this.getTasks();
    });
  }
}
