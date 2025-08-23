# Redis

## 一. 开始

### 1.1 下载

​	[Release 3.2.100 · microsoftarchive/redis · GitHub](https://github.com/microsoftarchive/redis/releases/tag/win-3.2.100)

​	打开网址选择 **Redis-x64-3.2.100.zip**下载即可，然后解压 ，可以选择将解压后的word文件删除



### 1.2 介绍

* **redis.windows.conf :**     redis核心配置文件
* **redis-benchmark.exe:**   性能测试工具
* **redis-check-aof.exe:**  AOF文件修复工具
* **redis-cli.exe：** 命令行客户端工具
* **redis-server.exe：** 服务器启动命令



**Redis单线程具有原子性，无需考虑并发的问题**



### 1.3  启动

* 双击 redis-server.exe 启动Redis，**端口默认6379** (别关闭，让它最小化）
* 再双击 redis-cli.exe 就可以输入命令行



### 1.4 Redis可视化工具

​		解压 **RedisDesktopManager_jb51.rar**，一直下一步即可



## 二. 操作Redis

### 2.1 基本操作

#### a. 切换库

​		redis有16个库(下标0-15)，默认是0，即第一个库

```
select 0
```



#### b. 清除屏幕信息

```
clear
```



#### c. 查询所有键

```
keys * 
```



#### d. 设置时效性

```
setex key seconds value
```



#### e. 补充设置时效

```
expire key seconds
```

==注意：补充设置时效是指之前已经设置好了值，但是没有设置时间==



#### f. 清空当前库所有数据

```
flushdb
```



#### g. 清空所有库数据

```
flushall
```



#### h.删除键

```
del key1 key2
```



#### i. 查看键类型

```
type key
```





### 2.2 String类型操作

#### 2.2.1 基本语法

| 含义                         | 语法                          |
| :--------------------------- | :---------------------------- |
| 添加/修改数据                | set key value                 |
| 获取数据                     | get key                       |
| 添加/修改多个数据            | mset key1 value1 key2  value2 |
| 获取多个数据                 | mget key1 key2                |
| 获取长度                     | strlen key                    |
| 追加(存在则追加，否则新增)   | append key value              |
| 设置单个数据过期时间(单位秒) | setex key seconds value       |

==注意：String类型适用于经常查询且简单的数据，如果没有K对应的V，会返回(nil)表示为空==



#### 2.2.2 场景一:数据库分表ID主键一致性

​													

**问题**

​			在大型的项目中，分表操作都是基本操作，一张表的数据过于庞大，会影响查询性能，可以用多张表来存储相同类型的数据(比如商品表将会分成多个表来存放商品)，但是对应的主键ID必须保证唯一性，不能重复。Oracle数据库提供了Sequence序列的解决方法，但是Mysql却不支持。



**开发经验**

* redis用于控制数据库ID生成策略，保证主键的唯一性，**单线程具有原子性，无需考虑并发的问题**
* 适用于所有数据库，且支持数据库集群



**操作**

```
语法:
incr key				//设置值,默认为1
incrby key increment	//让值每次掉用incr key后每次自增1

用法：
incr goods_id			//初始化goods_id 为1
incrby goods_id 1		//每次自增1
incr goods_id			//goods_id 为2
```

==注意：在设置了自增后，再次调用incr key才能自增，然后将自增的数据保存在分表的数据里即可==



#### 2.2.3 场景二:数据时效性(重点)

​													

**问题**

​			对于类似于热搜榜的数据，热销的商品，验证码，投票之类的数据在一定时间内有效



**开发经验**

* redis控制数据的生命周期，通过是否失效来控制业务行为，适用于所有具有时效性控制的操作，**可以代替之前存放于session中的判断业务(如验证码)**



**操作**

```
语法:
setex key seconds value		//设置k-v的生命周期，单位秒
psetex key millseconds value //设置k-v的生命周期，单位毫秒


用法：
setex code 60 198625	//设置code为198625的生命周期为60秒
psetex code 2000 198625	//设置code为198625的生命周期为2000毫秒(2秒)
```

==注意：生命周期过了之后再次调用会返回空(nil)==



### 2.3 Hash类型

#### 2.3.1 概述

> **对应java的类型为`Map<String, Map<String,Object> >`双层Map类型**

* 对一系列存储的数据进行分组，方便管理，典型应用存储对象信息
* 一个K存储空间保存多个field-value数据
* 底层采用哈希表结构存储数据	
* 存储结构优化
  * 1.如果field较少，存储结构优化为类数组结构
  * 2.如果field很多，存储结构使用HashMap结构

==注意：适用于经常添加或修改的数据==



#### 2.3.2 基本语法

| 含义                             | 语法                                  |
| -------------------------------- | ------------------------------------- |
| **添加/追加单个field-value数据** | hset key field value                  |
| **获取单个field的value数据**     | hget key field                        |
| **获取所有field-value数据**      | hgetall  key                          |
| **添加多个field-value数据**      | hmset key field1 value1 field2 value2 |
| 获取多个field的value数据         | hmget key field1 field2               |
| **删除指定field的数据**          | hdel key field1 field2                |
| 查询键的所有field                | hkeys key                             |
| 查询键所有的value                | hvals key                             |
| **单个field自增**                | hincrby key field increment           |





#### 2.3.3 场景一:购物车

​												

**案例需求**

1. 张三买了100台电脑，200个键盘
2. 李四买了200个键盘，400个鼠标
3. 李四又追加了100个鼠标垫，并查看了自己的购物车
4. 张三将电脑数量增加了100台，并查看了自己的购物车
5. 张三将键盘商品清除了，并查看了自己的购物车
6. 李四清空了购物车



**实现**

```properties
#1.张三买了100台电脑，200个键盘
hmset zs pc 100 keyboard 200

#2.李四买了200个键盘，400个鼠标
hmset ls keyboard 200 mouse 400

#3.李四又追加了100个鼠标垫，并查看了自己的购物车
hset ls mousecover 100
hgetall ls

#4.张三将电脑数量增加了100台，并查看了自己的购物车
hincrby zs pc 100
hgetall zs

#5.张三将键盘商品清除了，并查看了自己的购物车
hdel key keyboard
hgetall zs

#6.李四清空了购物车
del ls
```





#### 2.3.4 场景二:抢购限购功能(重点)

​																	

**开发经验**

​				redis应用于抢购、限购、限量发放优惠码等业务设计，当抢购数量小于0就让业务做出相应的操作



**操作**

```
hset iphone num 5	//设置iPhone数量为5
	
hincrby iphone num -1	//每次操作就减少一个，当数量小于0的时候，让业务代码做出操作
```



### 2.4 List类型

#### 2.4.1 概述

* 存储需求：存储多个数据，并对数据按顺序进行区分
* 存储结构：一个存储空间保存多个数据
* list类型：保存多个数据，底层使用双向链表结构



#### 2.4.2 基本语法

| 含义                                         | 语法                           |
| -------------------------------------------- | ------------------------------ |
| 添加/追加数据                                | lpush key value1 value2 value3 |
| 获取指定索引数据(从0开始，-1结束)            | lindex key index               |
| 获取所有数据(从0开始，-1结束)                | lrange key  start stop         |
| 获取长度                                     | llen key                       |
| 移除数据                                     | lpop key                       |
| 移除指定数据(从左到右删除指定value的count次) | lrem key count value           |

> ​	可以将List类型的数据添加想成栈(先进后出)，所以查询时会首先查询到最后一个数据

==注意：lpush代表数据从左边首先进入，rpush代表数据从右边首先进入==

​			==lpop代表删除左边的第一个元素，rpop代表删除右边的第一个元素==





#### 2.4.3 场景一:抖音点赞数量，微信点赞顺序

​																

**业务场景**

​				各种微博关注列表，各种新闻按时间的顺序展示，微信的点赞顺序，抖音的点赞数量等等



**开发经验**

* redis应用于具有操作先后顺序的数据控制

* redis应用于数量控制，定时的向数据库更新缓存的数据提高性能优化





### 2.5 Set类型

#### 2.5.1 概述

* 存储大量的数据，查询方面提供更高的效率
* 能够保存大量的数据，高效的内部存储机制，不能存储空值且值不能重复且无序



#### 2.5.2 基本语法

| 含义               | 语法                             |
| ------------------ | -------------------------------- |
| 添加/追加数据      | sadd key member1 member2 member3 |
| 获取全部数据       | smembers key                     |
| 删除数据           | srem key member1  member2        |
| 获取数据总数       | scard key                        |
| 判断数据是否存在   | sismember key                    |
| 移动集合的某个数据 | smove  fromkey  tokey  value     |



#### 2.5.3场景一:网站首页随机信息推荐(重点)

​											

**业务场景**

​			redis应用于各种随机推荐信息，例如歌单推荐，热点新闻推荐等等



**操作**

```
语法：
sadd key  member1 member2		//添加数据
srandmember key  count			//随机取出count个数据

用法：
sadd  movie a b c d e f g		//模拟增加各种影片信息
srandmember moive 4				//随机取出4种影片
```





#### 2.5.4 场景二:筛选共同好友，推荐好友

​											

**业务场景**

​			redis应用于同类信息的关联搜索，二度关联搜索，深度关联搜索，显示共同关注，共同好友



**解决方案**

​				Set类型可以操作两个集合的交，并，差集

* 交集：两个集合共同的
* 并集：两个结合总共的
* 差集：A-B，集合A-集合B 剩下A的数据



**操作**

```
语法：
sinter key1  key2	//交集
sunion key1  key2 	//并集
sdiff  key1  key2	//差集

sinterstore newkey  key1 key2	//将交集产生的数据放入新key中
sunionstore newkey  key1 key2	//将并集产生的数据放入新key中
sdiffstore	newkey  key1 key2	//将差集产生的数据放入新key中
	
用法：
sadd set1 a b c d e f g
sadd set2 a b c d h i j

sinter set1 set2 	//返回a b c d
sunion set1 set2	//返回a b c d e f g h i j
sdiff set1 set2		//返回e f g
```



### 2.6 ZSet类型

#### 2.6.1 概述

* 可以保存可排序的数据
* 在set的存储结构上添加可排序字段，因此数据不能重复



#### 2.6.2 基本语法

| 含义                                     | 语法                                    |
| ---------------------------------------- | --------------------------------------- |
| 添加/追加数据                            | zadd key  score member   score2 member2 |
| 获取数据(从小到大,从0开始，-1结束)       | zranage key start  stop                 |
| 获取数据(从大到小,从0开始，-1结束)       | zrevrange key start stop                |
| 获取数据带有分数(可以升序降序，默认升序) | zrange key start stop withscores        |
| 移除数据                                 | zrem key member                         |
| 区间查询(可以升序降序，默认升序)         | zrangebyscore key  min max              |
| 获取排名                                 | zrank key member                        |
| 获取score值                              | zscore key member                       |

==注意：ZSet类型其它操作和Set类型一致，只需要更改前缀Z==



#### 2.6.3 场景一:排行榜(重点)

​																						

**业务场景**

​				投票选出排行榜前几，各类网站的Top系列，聊天室活跃度设计，游戏好友亲密度



**操作**

```
zadd list 5 zs 8 ls 9 ww  1 zl	//添加数据
zrange list 0 2					//从小到大筛选出前3名
```



## 三. 持久化

### 3.1 概述

​			Redis是一个内存数据库，当每次关机或重启后数据会丢失，我们可以将Redis内存中的数据持久化保存在本地磁盘中。**RDB:Redis默认方式，在一定时间内，检测key的变化情况，然后持久化数据**。如果从数据库查询10000条数据并放入内存中，用RDB的方式就可能会出现宕机的情况，就应该用另一种方法:**AOF**

* RDB：注重性能，忽略数学备份
* AOF：注重备份，忽略性能



## 四. Jedis

### 4.1 开始

`a.导入依赖`

```xml-dtd
 <!--jedis-->
    <dependency>
      <groupId>redis.clients</groupId>
      <artifactId>jedis</artifactId>
      <version>3.2.0</version>
    </dependency>
<!--fastjson-->
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>fastjson</artifactId>
      <version>1.2.78</version>
    </dependency>
```

`b.测试`

```JAVA
 @Test
    public void test(){
        //连接Redis
        Jedis jedis=new Jedis("localhost",6379);
        //设置字符串
        jedis.set("userName","eobard");
        //设置有效期
        jedis.setex("code",60,"7895");
        //获取键
        String userName = jedis.get("userName");
        System.out.println("userName = " + userName);
        //关闭连接
        jedis.close();
    }
}
```

> ​	注意：后期获取数据列表的时候，可以将数据列表放入缓冲中，然后从缓存中获取数据

```JAVA
   		List<User> users = new ArrayList<>();
        users.add(new User(1,"tom","hk"));
        users.add(new User(2,"jack","cq"));
        users.add(new User(3,"herry","cd"));
        jedis.set("userList", JSON.toJSONString(users));
        System.out.println(jedis.get("userList"));
```



### 4.2 Jedis使用

> Jedis的API和redis的命令一致，可以根据redis的命令来调用API，**相应的API都有对应的返回值，后期可以根据返回值来判断相应的命令是否成功**



### 4.3 Jedis连接池

`a.创建jedis.properties配置文件`

```properties
#ip地址
host=127.0.0.1
#端口号
port=6379
#最大连接数
maxTotal=50
#最大空闲数
maxIdle=10
```



`b.创建工具类`

```JAVA
public class JedisPoolUtils {
    private JedisPoolUtils(){}

    private static JedisPool pool=null;

    static {
        //读取配置文件
        InputStream in = JedisPoolUtils.class.getClassLoader().getResourceAsStream("jedis.properties");
        Properties properties=new Properties();
        try {
            properties.load(in);
        } catch (IOException e) {
            e.printStackTrace();
        }
        //设置最大连接数和最大空闲数
        JedisPoolConfig config=new JedisPoolConfig();
        config.setMaxTotal(Integer.valueOf(properties.getProperty("maxTotal")));
        config.setMaxIdle(Integer.valueOf(properties.getProperty("maxIdle")));
        //初始化连接池
        pool=new JedisPool(config,properties.getProperty("host"),Integer.valueOf(properties.getProperty("port")));
    }

    //获取连接
    public static Jedis getJedis(){
        return pool.getResource();
    }
}
```



`c.测试`

```JAVA
 @Test
    public void  test2(){
        Jedis jedis = JedisPoolUtils.getJedis();
        jedis.setex("code",10,"12345");
        jedis.close();
    }
```



## 五. SSM整合Redis

`1.导入依赖`

```xml-dtd
 <!-- redis-->
    <dependency>
      <groupId>redis.clients</groupId>
      <artifactId>jedis</artifactId>
      <version>2.4.2</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.data</groupId>
      <artifactId>spring-data-redis</artifactId>
      <version>1.3.0.RELEASE</version>
    </dependency>
```



`2.resources创建redis.properties`

```properties
#连接主机地址
redis.host=127.0.0.1
#连接端口
redis.port=6379
#最大空闲数
redis.maxIdle=300
#最大连接数
redis.maxTotal=500
#超时时间
redis.timeOut=100000
```



`3.applicationContext.xml修改代码`

```xml-dtd
 	 <!-- 扫描注解所在的包 -->
    <context:component-scan base-package="com.eobard.dao,com.eobard.service,com.eobard.utils"/>

    <!--加载redis的配置文件信息-->
    <context:property-placeholder ignore-unresolvable="true" location="classpath:redis.properties"/>

```



`4.创建RedisUtils工具类操作API`

```JAVA
package com.eobard.utils;

public class RedisUtils {
    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * 指定缓存失效时间
     * @param key  键
     * @param time 时间(秒)
     * @return
     */
    public boolean expire(String key, long time) {
        try {
            if (time > 0) {
                redisTemplate.expire(key, time, TimeUnit.SECONDS);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    /**
     * 判断key是否存在
     * @param key 键
     * @return true 存在 false不存在
     */
    public boolean hasKey(String key) {
        try {
            return redisTemplate.hasKey(key);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 删除缓存
     * @param key 可以传一个值 或多个
     */
    @SuppressWarnings("unchecked")
    public void del(String... key) {
        if (key != null && key.length > 0) {
            if (key.length == 1) {
                redisTemplate.delete(key[0]);
            } else {
                redisTemplate.delete(CollectionUtils.arrayToList(key));
            }
        }
    }

    /**
     * 普通缓存获取
     * @param key 键
     * @return 值
     */
    public Object get(String key) {
        if(!StringUtils.isEmpty(key)){
            return redisTemplate.opsForValue().get(key);
        }
        return null;
    }

    /**
     * 普通缓存放入
     * @param key   键
     * @param value 值
     * @return true成功 false失败
     */
    public boolean set(String key, Object value) {
        try {
            redisTemplate.opsForValue().set(key, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

    }

    /**
     * 普通缓存放入并设置时间
     * @param key   键
     * @param value 值
     * @param time  时间(分钟) time要大于0 如果time小于等于0 将设置无限期
     * @return true成功 false 失败
     */
    public boolean set(String key, Object value, long time) {
        try {
            if (time > 0) {
                redisTemplate.opsForValue().set(key, value, time, TimeUnit.MINUTES);
            } else {
                set(key, value);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 递增
     * @param key   键
     * @param delta 要增加几(大于0)
     * @return
     */
    public long incr(String key, long delta) {
        if (delta < 0) {
            throw new RuntimeException("递增因子必须大于0");
        }
        return redisTemplate.opsForValue().increment(key, delta);
    }

    /**
     * 递减
     * @param key   键
     * @param delta 要减少几(小于0)
     * @return
     */
    public long decr(String key, long delta) {
        if (delta < 0) {
            throw new RuntimeException("递减因子必须大于0");
        }
        return redisTemplate.opsForValue().increment(key, -delta);
    }

    // ================================Map=================================

    /**
     * HashGet
     * @param key  键 不能为null
     * @param item 项 不能为null
     * @return 值
     */
    public Object hget(String key, String item) {
        return redisTemplate.opsForHash().get(key, item);
    }

    /**
     * 获取hashKey对应的所有键值
     * @param key 键
     * @return 对应的多个键值
     */
    public Map<Object, Object> hmget(String key) {
        return redisTemplate.opsForHash().entries(key);
    }

    /**
     * HashSet
     * @param key 键
     * @param map 对应多个键值
     * @return true 成功 false 失败
     */
    public boolean hmset(String key, Map<String, Object> map) {
        try {
            redisTemplate.opsForHash().putAll(key, map);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * HashSet 并设置时间
     * @param key  键
     * @param map  对应多个键值
     * @param time 时间(秒)
     * @return true成功 false失败
     */
    public boolean hmset(String key, Map<String, Object> map, long time) {
        try {
            redisTemplate.opsForHash().putAll(key, map);
            if (time > 0) {
                expire(key, time);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 向一张hash表中放入数据,如果不存在将创建
     *
     * @param key   键
     * @param item  项
     * @param value 值
     * @return true 成功 false失败
     */
    public boolean hset(String key, String item, Object value) {
        try {
            redisTemplate.opsForHash().put(key, item, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 向一张hash表中放入数据,如果不存在将创建
     * @param key   键
     * @param item  项
     * @param value 值
     * @param time  时间(秒) 注意:如果已存在的hash表有时间,这里将会替换原有的时间
     * @return true 成功 false失败
     */
    public boolean hset(String key, String item, Object value, long time) {
        try {
            redisTemplate.opsForHash().put(key, item, value);
            if (time > 0) {
                expire(key, time);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 删除hash表中的值
     * @param key  键 不能为null
     * @param item 项 可以使多个 不能为null
     */
    public void hdel(String key, Object... item) {
        redisTemplate.opsForHash().delete(key, item);
    }

    /**
     * 判断hash表中是否有该项的值
     *
     * @param key  键 不能为null
     * @param item 项 不能为null
     * @return true 存在 false不存在
     */
    public boolean hHasKey(String key, String item) {
        return redisTemplate.opsForHash().hasKey(key, item);
    }

    /**
     * hash递增 如果不存在,就会创建一个 并把新增后的值返回
     *
     * @param key  键
     * @param item 项
     * @param by   要增加几(大于0)
     * @return
     */
    public double hincr(String key, String item, double by) {
        return redisTemplate.opsForHash().increment(key, item, by);
    }

    /**
     * hash递减
     *
     * @param key  键
     * @param item 项
     * @param by   要减少记(小于0)
     * @return
     */
    public double hdecr(String key, String item, double by) {
        return redisTemplate.opsForHash().increment(key, item, -by);
    }

    // ============================set=============================

    /**
     * 根据key获取Set中的所有值
     *
     * @param key 键
     * @return
     */
    public Set<Object> sGet(String key) {
        try {
            return redisTemplate.opsForSet().members(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 根据value从一个set中查询,是否存在
     *
     * @param key   键
     * @param value 值
     * @return true 存在 false不存在
     */
    public boolean sHasKey(String key, Object value) {
        try {
            return redisTemplate.opsForSet().isMember(key, value);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将数据放入set缓存
     *
     * @param key    键
     * @param values 值 可以是多个
     * @return 成功个数
     */
    public long sSet(String key, Object... values) {
        try {
            return redisTemplate.opsForSet().add(key, values);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 将set数据放入缓存
     *
     * @param key    键
     * @param time   时间(秒)
     * @param values 值 可以是多个
     * @return 成功个数
     */
    public long sSetAndTime(String key, long time, Object... values) {
        try {
            Long count = redisTemplate.opsForSet().add(key, values);
            if (time > 0)
                expire(key, time);
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 获取set缓存的长度
     *
     * @param key 键
     * @return
     */
    public long sGetSetSize(String key) {
        try {
            return redisTemplate.opsForSet().size(key);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 移除值为value的
     *
     * @param key    键
     * @param values 值 可以是多个
     * @return 移除的个数
     */
    public long setRemove(String key, Object... values) {
        try {
            Long count = redisTemplate.opsForSet().remove(key, values);
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
    // ===============================list=================================

    /**
     * 获取list缓存的内容
     * @param key   键
     * @param start 开始
     * @param end   结束 0 到 -1代表所有值
     * @return
     */
    public List<Object> lGet(String key, long start, long end) {
        try {
            return redisTemplate.opsForList().range(key, start, end);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 获取list缓存的长度
     *
     * @param key 键
     * @return
     */
    public long lGetListSize(String key) {
        try {
            return redisTemplate.opsForList().size(key);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 通过索引 获取list中的值
     *
     * @param key   键
     * @param index 索引 index>0时， 0 表头，1 第二个元素，依次类推；index<0时，-1，表尾，-2倒数第二个元素，依次类推
     * @return
     */
    public Object lGetIndex(String key, long index) {
        try {
            return redisTemplate.opsForList().index(key, index);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 将list放入缓存
     *
     * @param key   键
     * @param value 值
     * @return
     */
    public boolean lSet(String key, Object value) {
        try {
            redisTemplate.opsForList().rightPush(key, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将list放入缓存
     *
     * @param key   键
     * @param value 值
     * @param time  时间(秒)
     * @return
     */
    public boolean lSet(String key, Object value, long time) {
        try {
            redisTemplate.opsForList().rightPush(key, value);
            if (time > 0)
                expire(key, time);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将list放入缓存
     *
     * @param key   键
     * @param value 值
     * @return
     */
    public boolean lSet(String key, List<Object> value) {
        try {
            redisTemplate.opsForList().rightPushAll(key, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将list放入缓存
     *
     * @param key   键
     * @param value 值
     * @param time  时间(秒)
     * @return
     */
    public boolean lSet(String key, List<Object> value, long time) {
        try {
            redisTemplate.opsForList().rightPushAll(key, value);
            if (time > 0)
                expire(key, time);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 根据索引修改list中的某条数据
     *
     * @param key   键
     * @param index 索引
     * @param value 值
     * @return
     */
    public boolean lUpdateIndex(String key, long index, Object value) {
        try {
            redisTemplate.opsForList().set(key, index, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 移除N个值为value
     * @param key   键
     * @param count 移除多少个
     * @param value 值
     * @return 移除的个数
     */
    public long lRemove(String key, long count, Object value) {
        try {
            Long remove = redisTemplate.opsForList().remove(key, count, value);
            return remove;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

}
```



`5.SSM通过注解注入Redis`

```JAVA
package com.eobard.utils;

@Repository     //这里不用@Configuration
public class RedisConfig {

    @Value("${redis.maxIdle}")
    private Integer maxIdle;//最大空闲数
    @Value("${redis.maxTotal}")
    private Integer maxTotal;//最大连接数
    @Value("${redis.host}")
    private String hostName;//主机地址
    @Value("${redis.port}")
    private Integer port;//主机端口号
    @Value("${redis.timeOut}")
    private Integer timeOut;//超时时间


    /*设置Jedis连接池*/
    @Bean
    public JedisPoolConfig poolConfig() {
        JedisPoolConfig poolConfig = new JedisPoolConfig();
        poolConfig.setMaxIdle(maxIdle);
        poolConfig.setMaxTotal(maxTotal);
        return poolConfig;
    }

    /*Spring整合Jedis,设置连接属性*/
    @Bean
    public JedisConnectionFactory connectionFactory(JedisPoolConfig poolConfig){
        JedisConnectionFactory connectionFactory = new JedisConnectionFactory();
        connectionFactory.setHostName(hostName);
        connectionFactory.setPort(port);
        connectionFactory.setPoolConfig(poolConfig);
        connectionFactory.setTimeout(timeOut);
        return connectionFactory;
    }

    /*注入RedisTemplate工具类*/
    @Bean("redisTemplate")
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<Object, Object> redisTemplate = new RedisTemplate();
        //设置redis连接
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        Jackson2JsonRedisSerializer jsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jsonRedisSerializer.setObjectMapper(objectMapper);

        //设置序列化规则
        redisTemplate.setHashKeySerializer(jsonRedisSerializer);
        redisTemplate.setKeySerializer(jsonRedisSerializer);
        //将序列方式更改为StringRedisSerializer
        // key采用String的序列化方式
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        // hash的key也采用String的序列化方式
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        // value序列化方式采用jackson
        redisTemplate.setValueSerializer(jsonRedisSerializer);
        // hash的value序列化方式采用jackson
        redisTemplate.setHashValueSerializer(jsonRedisSerializer);
        redisTemplate.afterPropertiesSet();
        return redisTemplate;
    }

    /*注入自定义Redis操作工具类*/
    @Bean
    public RedisUtils redisUtils() {
        return new RedisUtils();
    }
}
```



`6.测试`

```JAVA
@RunWith(SpringJUnit4ClassRunner.class)		   
@ContextConfiguration("classpath:applicationContext.xml")  
public class TestRedis {
    
    @Autowired
    private RedisUtils redisUtils;


    @Test
    public void test() {
        if(!redisUtils.hasKey("name")){
            redisUtils.set("name","喜喜123");
        }
        System.out.println(redisUtils.get("name"));
    }
}
```

