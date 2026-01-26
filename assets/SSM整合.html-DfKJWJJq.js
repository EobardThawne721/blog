import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as l,o as i}from"./app-BdhoJXxi.js";const e="/blog/assets/image-20211122200905824-CkHLf5Jn.png",p={};function t(d,s){return i(),a("div",null,s[0]||(s[0]=[l(`<h1 id="ssm整合" tabindex="-1"><a class="header-anchor" href="#ssm整合"><span>SSM整合</span></a></h1><h2 id="_1-创建maven项目-导入依赖" tabindex="-1"><a class="header-anchor" href="#_1-创建maven项目-导入依赖"><span>1. 创建Maven项目，导入依赖</span></a></h2><div class="language-xml-dtd line-numbers-mode" data-highlighter="shiki" data-ext="xml-dtd" data-title="xml-dtd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> &lt;properties&gt;</span></span>
<span class="line"><span>        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;</span></span>
<span class="line"><span>        &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span>        &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span>        &lt;!--  锁定版本信息  --&gt;</span></span>
<span class="line"><span>        &lt;!--  spring相关版本  --&gt;</span></span>
<span class="line"><span>        &lt;spring.version&gt;5.2.8.RELEASE&lt;/spring.version&gt;</span></span>
<span class="line"><span>        &lt;!--  mybatis版本  --&gt;</span></span>
<span class="line"><span>        &lt;mybatis.version&gt;3.5.5&lt;/mybatis.version&gt;</span></span>
<span class="line"><span>        &lt;!--  mybatis-spring版本  --&gt;</span></span>
<span class="line"><span>        &lt;mybatis-spring.version&gt;2.0.5&lt;/mybatis-spring.version&gt;</span></span>
<span class="line"><span>        &lt;!--  mysql版本  --&gt;</span></span>
<span class="line"><span>        &lt;mysql.version&gt;5.1.37&lt;/mysql.version&gt;</span></span>
<span class="line"><span>        &lt;!--  fast json版本  --&gt;</span></span>
<span class="line"><span>        &lt;fast-json.version&gt;1.2.75&lt;/fast-json.version&gt;</span></span>
<span class="line"><span>        &lt;!--  jackson版本  --&gt;</span></span>
<span class="line"><span>        &lt;jackson.version&gt;2.11.2&lt;/jackson.version&gt;</span></span>
<span class="line"><span>    &lt;/properties&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!--  依赖坐标  --&gt;</span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;!-- spring相关 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-context&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${spring.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.aspectj&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.8.7&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${spring.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-tx&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${spring.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-test&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${spring.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!-- mybatis相关 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mybatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${mybatis.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${mybatis-spring.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  mysql  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${mysql.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--日志--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;commons-logging&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;commons-logging&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.2&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  DBCP数据源  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;commons-dbcp&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;commons-dbcp&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.4&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  log4j  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;log4j&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;log4j&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.2.17&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  单元测试  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;4.13&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  spring web  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${spring.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  spring mvc  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${spring.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  jsp  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;javax.servlet.jsp&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jsp-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.2&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  servlet  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;javax.servlet&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;4.0.1&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  JSR 303依赖  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.hibernate&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;5.4.3.Final&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  fast json  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${fast-json.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--jackson--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jackson-core&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${jackson.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${jackson.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  commons-io  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;commons-io&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;commons-io&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.7&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  commons-fileupload  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;commons-fileupload&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;commons-fileupload&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.4&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>       &lt;!--jstl标签--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;jstl&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jstl&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.2&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--  pagehelper  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;pagehelper&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;5.2.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>注意：若想要把Mapper的映射文件放在src/main/java目录下，则要在pom.xml文件中添加以下配置</mark></p><div class="language-xml-dtd line-numbers-mode" data-highlighter="shiki" data-ext="xml-dtd" data-title="xml-dtd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>        &lt;resources&gt;</span></span>
<span class="line"><span>            &lt;resource&gt;</span></span>
<span class="line"><span>                &lt;directory&gt;src/main/resources&lt;/directory&gt;</span></span>
<span class="line"><span>                &lt;includes&gt;</span></span>
<span class="line"><span>                    &lt;include&gt;**/*.xml&lt;/include&gt;</span></span>
<span class="line"><span>                    &lt;include&gt;**/*.properties&lt;/include&gt;</span></span>
<span class="line"><span>                &lt;/includes&gt;</span></span>
<span class="line"><span>                &lt;filtering&gt;true&lt;/filtering&gt;</span></span>
<span class="line"><span>            &lt;/resource&gt;</span></span>
<span class="line"><span>            &lt;resource&gt;</span></span>
<span class="line"><span>                &lt;directory&gt;src/main/java&lt;/directory&gt;</span></span>
<span class="line"><span>                &lt;includes&gt;</span></span>
<span class="line"><span>                    &lt;include&gt;**/*.properties&lt;/include&gt;</span></span>
<span class="line"><span>                    &lt;include&gt;**/*.xml&lt;/include&gt;</span></span>
<span class="line"><span>                &lt;/includes&gt;</span></span>
<span class="line"><span>                &lt;filtering&gt;true&lt;/filtering&gt;</span></span>
<span class="line"><span>            &lt;/resource&gt;</span></span>
<span class="line"><span>        &lt;/resources&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-在-resources文件夹下创建相应配置文件" tabindex="-1"><a class="header-anchor" href="#_2-在-resources文件夹下创建相应配置文件"><span>2. 在 resources文件夹下创建相应配置文件</span></a></h2><h3 id="_2-1-applicationcontext-xml" tabindex="-1"><a class="header-anchor" href="#_2-1-applicationcontext-xml"><span>2.1 applicationContext.xml</span></a></h3><div class="language-xml-dtd line-numbers-mode" data-highlighter="shiki" data-ext="xml-dtd" data-title="xml-dtd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;</span></span>
<span class="line"><span>       xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;</span></span>
<span class="line"><span>           http://www.springframework.org/schema/beans</span></span>
<span class="line"><span>           http://www.springframework.org/schema/beans/spring-beans.xsd</span></span>
<span class="line"><span>           http://www.springframework.org/schema/context</span></span>
<span class="line"><span>           http://www.springframework.org/schema/context/spring-context.xsd</span></span>
<span class="line"><span>           http://www.springframework.org/schema/tx</span></span>
<span class="line"><span>           http://www.springframework.org/schema/tx/spring-tx.xsd</span></span>
<span class="line"><span>           http://www.springframework.org/schema/aop</span></span>
<span class="line"><span>		   http://www.springframework.org/schema/aop/spring-aop.xsd&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 扫描注解所在的包 --&gt;</span></span>
<span class="line"><span>    &lt;context:component-scan base-package=&quot;com.eobard.dao,com.eobard.service&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 引入database.properties属性文件 --&gt;</span></span>
<span class="line"><span>    &lt;bean class=&quot;org.springframework.context.support.PropertySourcesPlaceholderConfigurer&quot;&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;location&quot;&gt;</span></span>
<span class="line"><span>            &lt;value&gt;classpath:db.properties&lt;/value&gt;</span></span>
<span class="line"><span>        &lt;/property&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 配置数据源dataSource --&gt;</span></span>
<span class="line"><span>    &lt;bean id=&quot;dataSource&quot; class=&quot;org.apache.commons.dbcp.BasicDataSource&quot;&gt;</span></span>
<span class="line"><span>        &lt;!--驱动--&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc.driver}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--连接字符串--&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--数据库用户名--&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;username&quot; value=&quot;\${jdbc.user}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--数据库密码--&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 配置SqlSessionFactoryBean:如果未来要使用MP，这里的class就需要换成MP的类 --&gt;</span></span>
<span class="line"><span>    &lt;bean id =&quot;sqlSessionFactory&quot; class=&quot;org.mybatis.spring.SqlSessionFactoryBean&quot;&gt;</span></span>
<span class="line"><span>        &lt;!--  引用数据源 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 加载MyBatis配置文件 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;configLocation&quot; value=&quot;classpath:mybatis-config.xml&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 加载src/main/resource文件下的SQL映射文件 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;mapperLocations&quot; value=&quot;classpath:mapper/**/*.xml&quot;/&gt;</span></span>
<span class="line"><span>			&lt;!--若想要加载src/main/java文件下则使用下列属性--&gt;</span></span>
<span class="line"><span>        &lt;!--</span></span>
<span class="line"><span>			&lt;property name=&quot;mapperLocations&quot; value=&quot;classpath:com/eobard/dao/**/*.xml&quot;/&gt;</span></span>
<span class="line"><span>		--&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--     使用mybatis-plus的MybatisSqlSessionFactoryBean</span></span>
<span class="line"><span>    &lt;bean id=&quot;sqlSessionFactory&quot; class=&quot;com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean&quot;&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;configLocation&quot; value=&quot;classpath:mybatis-config.xml&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;typeAliasesPackage&quot; value=&quot;com.eobard.entity&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;mapperLocations&quot; value=&quot;classpath:mapper/**/*.xml&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;--&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 加载mapper所在的包 --&gt;</span></span>
<span class="line"><span>    &lt;bean class=&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 扫描mapper接口所在的位置 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;basePackage&quot; value=&quot;com.eobard.dao&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 定义事务管理器 --&gt;</span></span>
<span class="line"><span>    &lt;bean id=&quot;transactionManager&quot; class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 开启注解式事务 --&gt;</span></span>
<span class="line"><span>    &lt;tx:annotation-driven transaction-manager=&quot;transactionManager&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>注意：不管使用了src/main/java还是src/main/resource的方法，都要在对应的路径下创建Mapper.xml映射文件，否则SSM环境搭建好了之后会启动不了</mark></p><h3 id="_2-2-db-properties" tabindex="-1"><a class="header-anchor" href="#_2-2-db-properties"><span>2.2 db.properties</span></a></h3><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">jdbc.driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;"> com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">jdbc.url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;"> jdbc:mysql://localhost:3306/ssm?</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">useUnicode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">true&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">characterEncoding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">utf-8</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">jdbc.user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;"> root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">jdbc.password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;"> 123456</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-log4j-properties" tabindex="-1"><a class="header-anchor" href="#_2-3-log4j-properties"><span>2.3 log4j.properties</span></a></h3><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">log4j.rootLogger</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">debug,con</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">log4j.appender.con</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">org.apache.log4j.ConsoleAppender</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">log4j.appender.con.layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">org.apache.log4j.PatternLayout</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">log4j.appender.con.layout.ConversionPattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">%d{MM-dd HH:mm:ss}[%p]%c%n -%m%n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-mybatis-config-xml" tabindex="-1"><a class="header-anchor" href="#_2-4-mybatis-config-xml"><span>2.4 mybatis-config.xml</span></a></h3><div class="language-xml-dtd line-numbers-mode" data-highlighter="shiki" data-ext="xml-dtd" data-title="xml-dtd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE configuration</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;settings&gt;</span></span>
<span class="line"><span>        &lt;!-- 显示日志信息 --&gt;</span></span>
<span class="line"><span>        &lt;setting name=&quot;logImpl&quot; value=&quot;LOG4J&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/settings&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;typeAliases&gt;</span></span>
<span class="line"><span>        &lt;!-- 设置别名 --&gt;</span></span>
<span class="line"><span>        &lt;package name=&quot;com.eobard.entity&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/typeAliases&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-springmvc-xml" tabindex="-1"><a class="header-anchor" href="#_2-5-springmvc-xml"><span>2.5 springmvc.xml</span></a></h3><div class="language-xml-dtd line-numbers-mode" data-highlighter="shiki" data-ext="xml-dtd" data-title="xml-dtd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;</span></span>
<span class="line"><span>       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;</span></span>
<span class="line"><span>           http://www.springframework.org/schema/beans</span></span>
<span class="line"><span>           http://www.springframework.org/schema/beans/spring-beans.xsd</span></span>
<span class="line"><span>           http://www.springframework.org/schema/mvc</span></span>
<span class="line"><span>           http://www.springframework.org/schema/mvc/spring-mvc.xsd</span></span>
<span class="line"><span>           http://www.springframework.org/schema/context</span></span>
<span class="line"><span>           http://www.springframework.org/schema/context/spring-context.xsd</span></span>
<span class="line"><span>           http://www.springframework.org/schema/aop</span></span>
<span class="line"><span>		http://www.springframework.org/schema/aop/spring-aop.xsd&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 加载控制器所在的包 --&gt;</span></span>
<span class="line"><span>    &lt;context:component-scan base-package=&quot;com.eobard.controller&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 配置视图解析器 --&gt;</span></span>
<span class="line"><span>    &lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 视图前缀（页面在哪个目录下） --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;prefix&quot; value=&quot;/WEB-INF/jsp/&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 视图后缀(页面的后缀名是什么) --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 加载静态资源 --&gt;</span></span>
<span class="line"><span>    &lt;mvc:resources mapping=&quot;/statics/**&quot; location=&quot;/statics/&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 开启注解支持 --&gt;</span></span>
<span class="line"><span>    &lt;mvc:annotation-driven&gt;</span></span>
<span class="line"><span>        &lt;mvc:message-converters&gt;</span></span>
<span class="line"><span>            &lt;!-- 配置编码字符集 --&gt;</span></span>
<span class="line"><span>            &lt;!-- 配置响应编码字符集 --&gt;</span></span>
<span class="line"><span>            &lt;bean class=&quot;org.springframework.http.converter.StringHttpMessageConverter&quot;&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;supportedMediaTypes&quot;&gt;</span></span>
<span class="line"><span>                    &lt;list&gt;</span></span>
<span class="line"><span>                        &lt;value&gt;text/html;charset=UTF-8&lt;/value&gt;</span></span>
<span class="line"><span>                        &lt;value&gt;application/json;charset=UTF-8&lt;/value&gt;</span></span>
<span class="line"><span>                        &lt;value&gt;text/plain;charset=UTF-8&lt;/value&gt;</span></span>
<span class="line"><span>                        &lt;value&gt;application/xml;charset=UTF-8&lt;/value&gt;</span></span>
<span class="line"><span>                    &lt;/list&gt;</span></span>
<span class="line"><span>                &lt;/property&gt;</span></span>
<span class="line"><span>            &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;!-- 配置Jackson消息转换器 --&gt;</span></span>
<span class="line"><span>            &lt;bean class=&quot;org.springframework.http.converter.json.MappingJackson2HttpMessageConverter&quot;&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;objectMapper&quot;&gt;</span></span>
<span class="line"><span>                    &lt;bean class=&quot;com.fasterxml.jackson.databind.ObjectMapper&quot;&gt;</span></span>
<span class="line"><span>                        &lt;!-- 格式化日期 --&gt;</span></span>
<span class="line"><span>                        &lt;property name=&quot;dateFormat&quot;&gt;</span></span>
<span class="line"><span>                            &lt;bean class=&quot;java.text.SimpleDateFormat&quot;&gt;</span></span>
<span class="line"><span>                                &lt;constructor-arg type=&quot;java.lang.String&quot; value=&quot;yyyy-MM-dd&quot; /&gt;</span></span>
<span class="line"><span>                            &lt;/bean&gt;</span></span>
<span class="line"><span>                        &lt;/property&gt;</span></span>
<span class="line"><span>                    &lt;/bean&gt;</span></span>
<span class="line"><span>                &lt;/property&gt;</span></span>
<span class="line"><span>            &lt;/bean&gt;</span></span>
<span class="line"><span>        &lt;/mvc:message-converters&gt;</span></span>
<span class="line"><span>    &lt;/mvc:annotation-driven&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 配置文件解析器对象，要求id名称必须是multipartResolver --&gt;</span></span>
<span class="line"><span>    &lt;bean id=&quot;multipartResolver&quot;</span></span>
<span class="line"><span>          class=&quot;org.springframework.web.multipart.commons.CommonsMultipartResolver&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 设置文件上传限制大小为10M --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;maxUploadSize&quot; value=&quot;10485760&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-根据路径创建mapper文件" tabindex="-1"><a class="header-anchor" href="#_2-6-根据路径创建mapper文件"><span>2.6 根据路径创建Mapper文件</span></a></h3><p>​ 根据applicationContext.xml文件的mapperLocations属性，在对应的路径下创建映射文件，该文件夹用于存放Mapper.xml文件</p><hr><h2 id="_3-修改webapp的web-xml" tabindex="-1"><a class="header-anchor" href="#_3-修改webapp的web-xml"><span>3. 修改webapp的web.xml</span></a></h2><div class="language-xml-dtd line-numbers-mode" data-highlighter="shiki" data-ext="xml-dtd" data-title="xml-dtd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd&quot;</span></span>
<span class="line"><span>         version=&quot;4.0&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 设置欢迎界面 --&gt;</span></span>
<span class="line"><span>    &lt;welcome-file-list&gt;</span></span>
<span class="line"><span>        &lt;welcome-file&gt;login.jsp&lt;/welcome-file&gt;</span></span>
<span class="line"><span>    &lt;/welcome-file-list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 加载spring配置文件 --&gt;</span></span>
<span class="line"><span>    &lt;listener&gt;</span></span>
<span class="line"><span>        &lt;listener-class&gt;org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt;</span></span>
<span class="line"><span>    &lt;/listener&gt;</span></span>
<span class="line"><span>    &lt;!-- 上下文参数配置 --&gt;</span></span>
<span class="line"><span>    &lt;context-param&gt;</span></span>
<span class="line"><span>        &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;</span></span>
<span class="line"><span>        &lt;!-- 使用*号通配符，通配符前面的字符要一致 --&gt;</span></span>
<span class="line"><span>        &lt;param-value&gt;classpath:applicationContext*.xml&lt;/param-value&gt;</span></span>
<span class="line"><span>    &lt;/context-param&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 加载springmvc配置文件 --&gt;</span></span>
<span class="line"><span>    &lt;servlet&gt;</span></span>
<span class="line"><span>        &lt;!-- servlet名称，名称自定义，名称唯一 --&gt;</span></span>
<span class="line"><span>        &lt;servlet-name&gt;springmvc&lt;/servlet-name&gt;</span></span>
<span class="line"><span>        &lt;!-- 前端控制器，SpringMVC核心控制器 --&gt;</span></span>
<span class="line"><span>        &lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;</span></span>
<span class="line"><span>        &lt;!-- web项目启动，立即加载springmvc配置文件 --&gt;</span></span>
<span class="line"><span>        &lt;init-param&gt;</span></span>
<span class="line"><span>            &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;</span></span>
<span class="line"><span>            &lt;!-- springmvc配置文件位置 --&gt;</span></span>
<span class="line"><span>            &lt;param-value&gt;classpath:springmvc.xml&lt;/param-value&gt;</span></span>
<span class="line"><span>        &lt;/init-param&gt;</span></span>
<span class="line"><span>    &lt;/servlet&gt;</span></span>
<span class="line"><span>    &lt;servlet-mapping&gt;</span></span>
<span class="line"><span>        &lt;!-- servlet名称，名称自定义 --&gt;</span></span>
<span class="line"><span>        &lt;servlet-name&gt;springmvc&lt;/servlet-name&gt;</span></span>
<span class="line"><span>        &lt;!-- 访问路径--&gt;</span></span>
<span class="line"><span>        &lt;url-pattern&gt;/&lt;/url-pattern&gt;</span></span>
<span class="line"><span>    &lt;/servlet-mapping&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 配置过滤器 --&gt;</span></span>
<span class="line"><span>    &lt;!--配置解决中文乱码的过滤器--&gt;</span></span>
<span class="line"><span>    &lt;filter&gt;</span></span>
<span class="line"><span>        &lt;filter-name&gt;encodingFilter&lt;/filter-name&gt;</span></span>
<span class="line"><span>        &lt;filter-class&gt;org.springframework.web.filter.CharacterEncodingFilter&lt;/filter-class&gt;</span></span>
<span class="line"><span>        &lt;init-param&gt;</span></span>
<span class="line"><span>            &lt;param-name&gt;encoding&lt;/param-name&gt;</span></span>
<span class="line"><span>            &lt;param-value&gt;UTF-8&lt;/param-value&gt;</span></span>
<span class="line"><span>        &lt;/init-param&gt;</span></span>
<span class="line"><span>        &lt;init-param&gt;</span></span>
<span class="line"><span>            &lt;param-name&gt;forceEncoding&lt;/param-name&gt;</span></span>
<span class="line"><span>            &lt;param-value&gt;true&lt;/param-value&gt;</span></span>
<span class="line"><span>        &lt;/init-param&gt;</span></span>
<span class="line"><span>    &lt;/filter&gt;</span></span>
<span class="line"><span>  &lt;!--配置过滤器的url映射路径--&gt;</span></span>
<span class="line"><span>    &lt;filter-mapping&gt;</span></span>
<span class="line"><span>        &lt;filter-name&gt;encodingFilter&lt;/filter-name&gt;</span></span>
<span class="line"><span>        &lt;url-pattern&gt;/*&lt;/url-pattern&gt;</span></span>
<span class="line"><span>    &lt;/filter-mapping&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/web-app&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-根据配置文件-创建相应的包结构" tabindex="-1"><a class="header-anchor" href="#_4-根据配置文件-创建相应的包结构"><span>4. 根据配置文件，创建相应的包结构</span></a></h2><blockquote><p>com.eobard.entity</p><p>com.eobard.dao</p><p>com.eobard.service</p><p>com.eobard.controller</p><p>....省略其它包</p></blockquote><h2 id="_5-项目截图" tabindex="-1"><a class="header-anchor" href="#_5-项目截图"><span>5.项目截图</span></a></h2><img src="`+e+'" alt="image-20211122200905824" align="left">',28)]))}const v=n(p,[["render",t]]),g=JSON.parse('{"path":"/backend/framework/spring/SSM%E6%95%B4%E5%90%88.html","title":"SSM整合","lang":"zh-CN","frontmatter":{"description":"SSM整合 1. 创建Maven项目，导入依赖 注意：若想要把Mapper的映射文件放在src/main/java目录下，则要在pom.xml文件中添加以下配置 2. 在 resources文件夹下创建相应配置文件 2.1 applicationContext.xml 注意：不管使用了src/main/java还是src/main/resource的方...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/backend/framework/spring/SSM%E6%95%B4%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"九龙坡郭富城的博客"}],["meta",{"property":"og:title","content":"SSM整合"}],["meta",{"property":"og:description","content":"SSM整合 1. 创建Maven项目，导入依赖 注意：若想要把Mapper的映射文件放在src/main/java目录下，则要在pom.xml文件中添加以下配置 2. 在 resources文件夹下创建相应配置文件 2.1 applicationContext.xml 注意：不管使用了src/main/java还是src/main/resource的方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-01-26T12:56:05.000Z"}],["meta",{"property":"article:modified_time","content":"2026-01-26T12:56:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SSM整合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-01-26T12:56:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Eobard Thawne\\",\\"url\\":\\"https://gitee.com/eobard721\\"}]}"]]},"headers":[{"level":2,"title":"1. 创建Maven项目，导入依赖","slug":"_1-创建maven项目-导入依赖","link":"#_1-创建maven项目-导入依赖","children":[]},{"level":2,"title":"2. 在 resources文件夹下创建相应配置文件","slug":"_2-在-resources文件夹下创建相应配置文件","link":"#_2-在-resources文件夹下创建相应配置文件","children":[{"level":3,"title":"2.1 applicationContext.xml","slug":"_2-1-applicationcontext-xml","link":"#_2-1-applicationcontext-xml","children":[]},{"level":3,"title":"2.2 db.properties","slug":"_2-2-db-properties","link":"#_2-2-db-properties","children":[]},{"level":3,"title":"2.3 log4j.properties","slug":"_2-3-log4j-properties","link":"#_2-3-log4j-properties","children":[]},{"level":3,"title":"2.4 mybatis-config.xml","slug":"_2-4-mybatis-config-xml","link":"#_2-4-mybatis-config-xml","children":[]},{"level":3,"title":"2.5 springmvc.xml","slug":"_2-5-springmvc-xml","link":"#_2-5-springmvc-xml","children":[]},{"level":3,"title":"2.6 根据路径创建Mapper文件","slug":"_2-6-根据路径创建mapper文件","link":"#_2-6-根据路径创建mapper文件","children":[]}]},{"level":2,"title":"3. 修改webapp的web.xml","slug":"_3-修改webapp的web-xml","link":"#_3-修改webapp的web-xml","children":[]},{"level":2,"title":"4. 根据配置文件，创建相应的包结构","slug":"_4-根据配置文件-创建相应的包结构","link":"#_4-根据配置文件-创建相应的包结构","children":[]},{"level":2,"title":"5.项目截图","slug":"_5-项目截图","link":"#_5-项目截图","children":[]}],"git":{"createdTime":1769432165000,"updatedTime":1769432165000,"contributors":[{"name":"Eobard","email":"2209473452@qq.com","commits":1}]},"readingTime":{"minutes":5.5,"words":1649},"filePathRelative":"backend/framework/spring/SSM整合.md","localizedDate":"2026年1月26日","excerpt":"\\n<h2>1. 创建Maven项目，导入依赖</h2>\\n<div class=\\"language-xml-dtd line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"xml-dtd\\" data-title=\\"xml-dtd\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span> &lt;properties&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  锁定版本信息  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  spring相关版本  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;spring.version&gt;5.2.8.RELEASE&lt;/spring.version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  mybatis版本  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;mybatis.version&gt;3.5.5&lt;/mybatis.version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  mybatis-spring版本  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;mybatis-spring.version&gt;2.0.5&lt;/mybatis-spring.version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  mysql版本  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;mysql.version&gt;5.1.37&lt;/mysql.version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  fast json版本  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;fast-json.version&gt;1.2.75&lt;/fast-json.version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  jackson版本  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;jackson.version&gt;2.11.2&lt;/jackson.version&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;/properties&gt;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    &lt;!--  依赖坐标  --&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;dependencies&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!-- spring相关 --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;spring-context&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${spring.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.aspectj&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;1.8.7&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${spring.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;spring-tx&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${spring.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;spring-test&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${spring.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!-- mybatis相关 --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;mybatis&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${mybatis.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${mybatis-spring.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  mysql  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${mysql.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--日志--&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;commons-logging&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;commons-logging&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;1.2&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  DBCP数据源  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;commons-dbcp&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;commons-dbcp&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;1.4&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  log4j  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;log4j&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;log4j&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;1.2.17&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  单元测试  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;4.13&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;scope&gt;test&lt;/scope&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  spring web  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;spring-web&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${spring.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  spring mvc  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${spring.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  jsp  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;javax.servlet.jsp&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;jsp-api&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;2.2&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;scope&gt;provided&lt;/scope&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  servlet  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;javax.servlet&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;4.0.1&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;scope&gt;provided&lt;/scope&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  JSR 303依赖  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;org.hibernate&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;5.4.3.Final&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  fast json  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${fast-json.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--jackson--&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;jackson-core&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${jackson.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;${jackson.version}&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  commons-io  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;commons-io&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;commons-io&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;2.7&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  commons-fileupload  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;commons-fileupload&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;commons-fileupload&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;1.4&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>       &lt;!--jstl标签--&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;jstl&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;jstl&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;1.2&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;!--  pagehelper  --&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;artifactId&gt;pagehelper&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>            &lt;version&gt;5.2.0&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>        &lt;/dependency&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;/dependencies&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{v as comp,g as data};
