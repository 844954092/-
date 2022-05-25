package com.kingland.neusoft.course.mapper;

import com.kingland.neusoft.course.mapper.dao.Dialogue;

import java.util.List;

public interface DialogueMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Dialogue record);

    int insertSelective(Dialogue record);

    Dialogue selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Dialogue record);

    int updateByPrimaryKey(Dialogue record);

    List<Dialogue> query();

    Integer count();
}