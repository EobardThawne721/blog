# MySQL

* 语法
  * SQL语句以分号结束，可以单行或多行书写
  * MySQL数据库SQL语句不区分大小写，关键字建议使用大写
  * 单行注释：`--`或`#`；多行注释：`/* 注释内容 */`
* SQL分类
  * DDL（Data Definition Language）：数据定义语言，定义数据库、表、字段
  * DML（Data Manipulation Language）：数据操作语言，对表中数据进行增删改操作
  * DQL（Data Query Language）：数据查询语言，查询表中数据
  * DCL（Data Control Language）：数据控制语言，创建数据库用户、控制数据库访问权限



## SQL

> `[...]`中括号里面的命令代表的是可选参数，非强制要求



### 数据库操作

* 查询所有数据库

  ```mysql
  show databases;
  ```

* 使用指定数据库

  ```mysql
  use 数据库名;
  ```

* 创建数据库

  ```mysql
  create database [if not exists] 数据库名;
  ```

* 删除数据库

  ```mysql
  drop database [if exists] 数据库名
  ```

* 查询当前使用的数据库

  ```mysql
  select database();
  ```



### 表操作

* 查询所有表

  ```MYSQL
  show tables;
  ```

* 查询表结构

  ```mysql
  desc 表名
  ```

* 查询当前表的创建语句

  ```mysql
  show create table 表名
  ```

* 创建表

  > **如果不指定符号位，默认创建时为有符号位**
  
  | 数据类型 |  大小   | signed（有符号范围） | unsigned（无符号范围） |                             描述                             |
  | :------: | :-----: | :------------------: | :--------------------: | :----------------------------------------------------------: |
  | tinyint  | 1个字节 |       -128~127       |         0~255          |         类似于Java的Byte，<br />eg：tinyint unsigned         |
  |   int    | 4个字节 |  -2^31^ ~ 2^31^ -1   |      0 ~ 2^32^ -1      |                     类似于Java的Integer                      |
  |  bigint  | 8个字节 |  -2^63^ ~ 2^63^ -1   |      0 ~ 2^64^ -1      |                       类似于Java的Long                       |
  |  float   | 4个字节 |         ....         |          ....          |                      类似于Java的Float                       |
  |  double  | 8个字节 |         ....         |          ....          | 类似于Java的Double；<br />eg：score  double(4,1) 表示分数最共4位，<br />即小数点前3位数字，小数点后保留一位数字 |
  | decimal  |         |  依赖于M精度和D标度  |   依赖于M精度和D标度   |                     类似于Java的Decimal                      |
  
  | 数据类型 | 大小          | 描述                                                         |
  | -------- | ------------- | ------------------------------------------------------------ |
  | char     | 0-255 bytes   | **定长字符串，性能好；eg：char(10)如果字符串长度不足10位，则会以空格填充** |
  | varchar  | 0-65535 bytes | 变长字符串，性能较差，会根据内容自动计算存储长度             |
  
  | 数据类型  | 格式                     | 描述     |
  | --------- | ------------------------ | -------- |
  | date      | YYYY-MM-DD               | 日期值   |
  | time      | HH:MM:SS                 | 时间值   |
  | year      | YYYY                     | 年份值   |
  | datetime  | YYYY-MM-DD HH:MM:SS      | 具体时间 |
  | timestamp | 年月日时分秒构成的时间戳 | 时间戳   |
  
  ```mysql
  create table 表名(
  	字段1  类型 		  		[comment “注释信息”],
      字段2  类型 符号位 		  [comment “注释信息”],
  	....
      字段n  类型(长度) 		   [comment “注释信息”]
  ) [comment “注释信息”];
  ```
  
  

[09. 基础-SQL-DDL-表操作-修改&删除_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kr4y1i7ru?spm_id_from=333.788.player.switch&vd_source=6ce2a6eb6cbcb840f00c1778af71ce3c&p=9)







```
1.去掉完全重复的行 → 用 DISTINCT

id  name
1   张三
1   张三
2   李四

SELECT DISTINCT id, name FROM 表;

2.去掉指定字段的重复 → 用 GROUP BY 指定字段

id  name
1   张三
1   张三丰

SELECT id, name FROM 表 GROUP BY id;
```

