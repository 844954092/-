# Kingland
### 说明

####创建功能 留言板列表 新增留言

[java]

    add com/kingland/neusoft/course/service/dialogueService.java
    add com/kingland/neusoft/course/controller/dialogueController.java
    add com/kingland/neusoft/course/mapper/dao/Dialogue.java
    add com/kingland/neusoft/course/mapper/DialogueMapper.java
    add com/kingland/neusoft/course/mapper/DialogueMapper.xml
    edit com/kingland/neusoft/course/util/tools.java
    edit com/kingland/neusoft/course/config/SecurityConfig.java 50;

    [SecurityConfig]
        .antMatchers("/login", "/logout","/getDialogueList").permitAll()
    [/SecurityConfig]

[angular]

    add src/app/plugins/create-dialogue //创建留言
    add src/app/plugins/dialogue //留言列表 不用登录可以访问
    edit proxy.conf.json //代理请求 4200端口转后台8080端口

[postgresql]
create table dialogue
(
    id           serial not null,
    context      text,
    context_time timestamp(3),
    constraint dialogue_pk primary key (id)
);

INSERT INTO user_access.dialogue (id, context, context_time)
VALUES  (2, '12312414', '2022-05-24 00:00:00.000'),
        (3, '啊哈哈哈哈哈哈哈哈哈', '2022-05-24 00:00:00.000'),
        (5, '测试', '2022-05-24 00:00:00.000');
```

