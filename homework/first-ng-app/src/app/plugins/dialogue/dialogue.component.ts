import { Component, OnInit } from '@angular/core';
import {UserApiService} from "../../core/api/user-api.service";
import {General} from "../../shared/model/general";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  dialogueContext:String ='';
  dialogueList:[] =[];
  constructor(
    private readonly userApiClient: UserApiService,
    private confirmationService: ConfirmationService,
              // private readonly general: General
  ) { }

  ngOnInit(): void {
    this.userApiClient.requestGlobal({
      uri:'/getDialogueList',
      type:'get',
    }).subscribe(result=>{
      this.dialogueList = result;
      // console.log(result);
    })
  }
  deleteDialogue(id: number, event: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.userApiClient.requestGlobal({
          uri:`/deleteDialogue/${id}`,
          type:'get',
        }).subscribe(result=>{
          if(result['responseType'] == 'SUCCESS'){
            alert('dialogue delete success');
            this.ngOnInit();
          }else{
            alert(result['message']);
          }
        })
      },
      reject: () => {

      }
    });
  }
}
