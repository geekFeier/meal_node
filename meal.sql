/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : meal

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2017-11-03 09:22:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for eat_list
-- ----------------------------
DROP TABLE IF EXISTS `eat_list`;
CREATE TABLE `eat_list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `type` tinyint(1) NOT NULL COMMENT '1 早餐 2中餐 3 晚餐',
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of eat_list
-- ----------------------------
INSERT INTO `eat_list` VALUES ('1', '清真火腿三明治', '1', '0');
INSERT INTO `eat_list` VALUES ('2', '心形鸡蛋', '1', '0');
INSERT INTO `eat_list` VALUES ('3', '健康早餐美味土豆饼', '1', '0');
INSERT INTO `eat_list` VALUES ('4', '杏仁草莓奶伴早餐', '1', '0');
INSERT INTO `eat_list` VALUES ('5', '松仔烤南瓜', '1', '0');
INSERT INTO `eat_list` VALUES ('6', '椰子早餐煎饼', '1', '0');
INSERT INTO `eat_list` VALUES ('7', '黑米粥', '1', '0');
INSERT INTO `eat_list` VALUES ('8', '英式早餐', '1', '0');
INSERT INTO `eat_list` VALUES ('9', '香蕉玛芬', '1', '0');
INSERT INTO `eat_list` VALUES ('10', '美味早餐意大利面', '1', '0');
INSERT INTO `eat_list` VALUES ('11', '美式早餐闷考牛肉汉堡', '1', '0');
INSERT INTO `eat_list` VALUES ('12', '银鱼蛋羹', '1', '0');
INSERT INTO `eat_list` VALUES ('13', '芝心烤虾土司', '1', '0');
