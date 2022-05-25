import { Component, OnInit } from '@angular/core';
import {UserApiService} from "../../core/api/user-api.service";

@Component({
  selector: 'app-create-dialogue',
  templateUrl: './create-dialogue.component.html',
  styleUrls: ['./create-dialogue.component.css']
})
export class CreateDialogueComponent implements OnInit {
  dialogueContext:String ='';
  constructor(
    private readonly userApiClient: UserApiService,
  ) { }

  ngOnInit(): void {
  }
  onRequest(){
    if(this.dialogueContext ==''){
      alert('留言内容不能为空');
      return;
    }else{
      this.userApiClient.requestGlobal({
        uri:'/addDialogue',
        type:'post',
        data:{
          'context':this.dialogueContext
        }
      }).subscribe(result=>{
        if(result['responseType'] == 'SUCCESS'){
          alert('dialogue create success');
          this.dialogueContext = '';
        }else{
          alert(result['message']);
        }
      })
    }
  }
}
