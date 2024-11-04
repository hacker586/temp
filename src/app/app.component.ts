import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){}
  task = new FormControl('');  
  taskList : any =[];
  completedTask : any =[];
  alertMessage : string = ""; 
  getTask(){
    if(this.taskList?.includes(this.task?.value)){
      this.alertMessage = "'"+this.task?.value+ "' Task already exist in the Remaining task List";  
      // alert("'"+this.task?.value+ "' Task already exist in the Remaining task List");
    }else if(this.completedTask?.includes(this.task?.value)){
      this.alertMessage = "'"+this.task?.value+ "' Task already exist in the Completed task List";  
      // alert("'"+this.task?.value+ "' Task already exist in the Completed task List");
    }else{
      this.taskList.push(this.task?.value);
      this.task?.setValue('');
      this.task?.reset();
    }
  }
  done(doneTask: any){
    this.completedTask.push(doneTask);
    this.taskList = this.taskList.filter((task: any) => task !== doneTask);
  }
  backToTaskList(data: any){
    this.taskList.push(data);
    this.completedTask = this.completedTask.filter((task: any) => task !== data);
  }
  closeAlert(){
    this.alertMessage ="";
  }
}
