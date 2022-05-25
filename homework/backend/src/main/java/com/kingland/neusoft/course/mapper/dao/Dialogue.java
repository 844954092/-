package com.kingland.neusoft.course.mapper.dao;

import java.util.Date;

public class Dialogue {
    private Integer id;

    private String context;

    private Date contextTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context == null ? null : context.trim();
    }

    public Date getContextTime() {
        return contextTime;
    }

    public void setContextTime(Date contextTime) {
        this.contextTime = contextTime;
    }
}