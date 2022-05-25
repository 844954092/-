package com.kingland.neusoft.course.controller;

import com.kingland.neusoft.course.mapper.dao.Dialogue;
import com.kingland.neusoft.course.service.UserService;
import com.kingland.neusoft.course.service.dialogueService;
import com.kingland.neusoft.course.util.tools;
import org.springframework.web.bind.annotation.*;
import com.kingland.neusoft.course.mapper.DialogueMapper;

import java.util.List;
import java.util.Map;


@RestController
public class dialogueController {
    private final DialogueMapper dialogueMapper;
    private final dialogueService dialogueSvr;


    public dialogueController(DialogueMapper dialogueMapper, dialogueService dialogueSvr) {
        this.dialogueSvr = dialogueSvr;
        this.dialogueMapper = dialogueMapper;
    }
    @GetMapping("/getDialogueList")//浏览器输入地址
    public List<Dialogue> getDialogueList(){
        return dialogueSvr.getAllDialogue();
    }
    @GetMapping("/deleteDialogue/{id}")
    public Map<String, Object> deleteDialogue(@PathVariable Integer id){
        if(dialogueSvr.deleteDialogue(id) == 1){
            return tools.responseJson(true, null, "删除留言成功");
        }else{
            return tools.responseJson(false, null, "删除留言失败");
        }
    }

    @PostMapping("/addDialogue")//浏览器输入地址
    public Map<String, Object> addDialogue(@RequestBody Map<String, Object> dialogue) {
        dialogue.put("time",tools.getNowDate());
        if(dialogueSvr.addDialogue(tools.toMessageModel(dialogue)) ==0)
            return tools.responseJson(false, null, "留言失败");
        else
            return tools.responseJson(true, null, "新增留言成功");
    }

}
