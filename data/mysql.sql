drop database if exists hw_mall;
create database hw_mall charset=utf8;
use hw_mall;
create table banner(
    bid int primary key auto_increment,
    img varchar(128)
);
insert into banner values
(null,'images/banner8.jpg'),
(null,'images/banner1.jpg'),
(null,'images/banner2.jpg'),
(null,'images/banner3.jpg'),
(null,'images/banner4.jpg'),
(null,'images/banner5.jpg'),
(null,'images/banner6.jpg'),
(null,'images/banner7.jpg'),
(null,'images/1_01.jpg'),
(null,'images/1_02.png'),
(null,'images/1_03.jpg'),
(null,'images/1_04.png'),
(null,'images/center-adv1.jpg'),
(null,'images/center-adv2.jpg'),
(null,'images/center-adv3.jpg'),
(null,'images/center-adv4.png'),
(null,'images/center-adv5.jpg');
create table hw_product(
   pid int primary key auto_increment,
   img varchar(128),
   title varchar(48),
   fg varchar(48),
   price int 
);
insert into hw_product values
(null,"images/2_01.jpg","荣耀V9","增保护壳+流量卡",2599),
(null,"images/2_02.jpg","华为畅享7Plus","增移动电源",1699),
(null,"images/2_03.jpg","荣耀畅玩6","增保护壳+流量卡",599),
(null,"images/2_04.jpg","华为畅享7","会员领劵享优惠",1099),
(null,"images/2_05.jpg","荣耀8青春版","送PPTV会员权益",1099),
(null,"images/2_06.jpg","HUAWEI Mate 9","最高优惠300元",3599),
(null,"images/2_07.jpg","荣耀8","直降200+赠好礼",1899),
(null,"images/2_08.jpg","HUAWEI nova2","赠送价值168元礼品",2499),
(null,"images/3_01.jpg","荣耀畅玩手环A2","智能大屏\t随心而动",199),
(null,"images/3_02.jpg","HUAWEI Mate9保时捷设计","智能大屏\t随心而动",8999),
(null,"images/3_03.jpg","荣耀手环3","NFC支付*\t50米防水",299),
(null,"images/3_04.jpg","华为运动手环", "独立GPS50米\t防水游泳",229),
(null,"images/3_05.jpg","荣耀NOTE8","下单减200+赠送包",2499),
(null,"images/3_06.png","HUAWEI WATCH 2","华为第二代智能运动手表",1688),
(null,"images/3_07.png","华为平板M3","2K高清屏幕麒麟950",1888),
(null,"images/3_08.png","华为路由器A1畅享版","优选5G信号",249),
(null,"images/3_09.jpg","荣耀畅玩平板2 8英寸","持久畅玩更痛快",799),
(null,"images/3_10.png","荣耀手表S1","哈佛科学睡眠监测算法",699),
(null,"images/3_11.jpg","华为2万毫安移动电源","大容量更持久",299),
(null,"images/3_12.jpg","荣耀畅玩平板2 7英寸","持久畅玩更痛快",199),
(null,"images/3_13.jpg","华为随行WiFi2","4G全网通3000mAh大电池",499),
(null,"images/4_01.jpg",  "荣耀畅玩6X",  "下单最高减200元",1299),
( null,"images/4_02.jpg",  "HUAWEI nova青春版",  "直降200元",1799),
( null,"images/4_03.jpg",  "荣耀畅玩6A",  "最高优惠50元",799),
( null,"images/4_04.jpg",  "HUAWEI nova2Plus",  "赠送价值168元礼品",2899),
( null,"images/4_05.jpg",  "荣耀Magic",  "下单立减300元 赠皮套",3699),
( null,"images/4_06.jpg",  "HUAWEI Mate 9 Pro",  "赠价值199元配件",4899),
( null,"images/4_07.jpg",  "华为畅玩6S",  "机身高颜值",1299),
(null, "images/5_01.jpg",  "HUAWEI MateBook D",  "尊享6期分期免息",5288),
(null, "images/5_02.jpg",  "HUAWEI MateBook E",  "尊享6期分期免息",6888),
(null, "images/5_03.jpg",  "HUAWEI MateBook ",  "二合一笔记电脑",4488),
(null, "images/6_02.jpg",  "华为平板M3青春版10.1英寸",  "二合一笔记电脑",1899),
(null, "images/6_03.jpg",  "华为平板M3青春版M3 8英寸",  "哈曼卡顿品质立体声",1399),
(null, "images/6_04.jpg",  "荣耀畅玩平板2 7英寸",  "【高性价比】掌上炫彩世界 ",599),
(null, "images/6_05.jpg",  "华为平板M3",  "2K高清屏幕 麒麟950",1888),
(null, "images/6_06.jpg",  "荣耀平板2",  "八核强劲芯片大容量",1299),
(null, "images/6_07.png",  "华为平板M3青春版10.1英寸",  "二合一笔记电脑",799),
(null, "images/7_01.jpg",  "荣耀畅玩平板2 8英寸",  "LTE限时直降100元",799),
(null, "images/7_02.jpg",  "华为平板M3青春版10.1英寸",  "二合一笔记电脑",1899),
(null, "images/7_03.png",  "华为平板M3青春版M3 8英寸",  "哈曼卡顿品质立体声",1399),
(null, "images/7_04.png",  "荣耀畅玩平板2 7英寸",  "【高性价比】掌上炫彩世界 ",599),
(null, "images/7_05.jpg",  "华为平板M3",  "2K高清屏幕 麒麟950",1888),
(null, "images/7_06.jpg",  "荣耀平板2",  "八核强劲芯片大容量",1299),
(null, "images/7_07.jpg",  "华为平板M3青春版10.1英寸",  "二合一笔记电脑",799)


 



 

