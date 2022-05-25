package com.kingland.neusoft.course.util;

import java.text.SimpleDateFormat;
import java.util.*;

import com.kingland.neusoft.course.mapper.dao.Dialogue;
import com.kingland.neusoft.course.mapper.dao.UserModel;
import org.springframework.boot.system.ApplicationHome;

public class tools {


    public static Date getNowDate(){
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date date=null;
        try {
            date= sdf.parse(sdf.format(new java.util.Date()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return date;
    }

    public static UserModel toUserModel(Map<String,Object> userData){
        UserModel userModel = new UserModel();
        userModel.setId((Long)userData.get("userId"));
        userModel.setName((String)userData.get("name"));
        userModel.setUsername((String)userData.get("username"));
        userModel.setGender((Integer)userData.get("gender"));
        userModel.setBirthday((Date)userData.get("DateBirthday"));
        userModel.setPhoneNum((String)userData.get("phoneNum"));
        userModel.setHomeAddress((String)userData.get("homeAddress"));
        userModel.setIsAdmin((boolean)userData.get("isAdmin"));
        userModel.setPassword((String)userData.get("password"));
        return userModel;
    }

    public static Dialogue toMessageModel(Map<String,Object> dialogue){
        Dialogue dialogueModel = new Dialogue();
        dialogueModel.setId((Integer)dialogue.get("id"));
        dialogueModel.setContext((String)dialogue.get("context"));
        dialogueModel.setContextTime((Date)dialogue.get("time"));
        return dialogueModel;
    }

    public static Map<String, Object> responseJson(Boolean isSuccess,Map<String,Object> responseParams,String string){
        Map<String,Object> params = new HashMap<>(); 
        if(isSuccess){
            params.put("responseType", "SUCCESS");
            if(responseParams != null){
                params.put("data", responseParams);
            }
        }else{
            params.put("responseType", "ERROR");
        }
        if(string != null){
            params.put("message",string);
        }
        return params;
    }
}
