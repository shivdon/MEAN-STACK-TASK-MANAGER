import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService, private authService: AuthService) { }

  getTasks() {
    const token = this.authService.getAccessToken() as string
    const userId = this.authService.getUserId()

    return this.webReqService.get(`tasks/${userId}`, token);
  }

  createTask(title: string, ) {
    const userId = this.authService.getUserId()
    const token = this.authService.getAccessToken() as string
    // We want to send a web request to create a list
    return this.webReqService.post('task/', { title, userId }, token);
  }

  updateTask(taskId: string, title: string) {
    const token = this.authService.getAccessToken() as string
    // We want to send a web request to update a list
    return this.webReqService.put(`/task/${taskId}`, { title }, token);
  }

  deleteTask(taskId: string) {
    const token = this.authService.getAccessToken() as string
    return this.webReqService.delete(`/task/${taskId}`, token);
  }

  updateTaskStatus(status: boolean, taskId: string){
    const token = this.authService.getAccessToken() as string
    return this.webReqService.put(`/task/status/${taskId}`, { status }, token);
  }
}
