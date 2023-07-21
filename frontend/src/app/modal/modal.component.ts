import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  taskId: string | null = null;
  title: string | null = null;
  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private taskService: TaskService
  ) {}

  updateTaskTitle(taskId: string | null, title: string | null) {
    this.taskService.updateTask(taskId as string, title as string).subscribe((res: any) => {
      this.modalRef.close()
    });
  }
}
