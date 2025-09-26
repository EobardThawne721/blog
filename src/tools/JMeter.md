# JMeter

* 必须先安装jdk

  

* 将`apache-jmeter-5.4.3.zip`解压到某一路径，并将`logkit-1.2.jar.zip`解压的jar包放入jmeter的lib文件夹里面



* 配置jmeter环境变量

```properties
环境变量名：JMETER_HOME
环境变量值：jmeter解压安装路径


#需要在classpath环境后追加
环境变量名：CLASSPATH
环境变量值：%JMETER_HOME%\lib\ext\ApacheJMeter_core.jar;%JMETER_HOME%\lib\jorphan.jar;%JMETER_HOME%\lib\logkit-2.0.jar; 
```



* 修改解压后jmeter的bin文件的**jmeter.properties**文件

```properties
#在#language=en下面插入一行
language=zh_CN
```



* 运行bin文件的`jmeter.bat`文件

