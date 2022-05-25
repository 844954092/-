package com.kingland.neusoft.course.service;

import com.kingland.neusoft.course.mapper.DialogueMapper;
import com.kingland.neusoft.course.mapper.dao.Dialogue;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class dialogueService {
    private final DialogueMapper dialogueMapper;

    public dialogueService(DialogueMapper dialogueMapper) {
        this.dialogueMapper = dialogueMapper;
    }

    public List<Dialogue> getAllDialogue() {
        return this.dialogueMapper.query();
    }

    public int addDialogue(Dialogue dialogue){
        return  dialogueMapper.insert(dialogue);
    }

    public int deleteDialogue(Integer id) {
        return this.dialogueMapper.deleteByPrimaryKey(id);
    }
}
