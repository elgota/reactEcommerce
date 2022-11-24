DROP DATABASE IF EXISTS `vivero13`;

CREATE SCHEMA IF NOT EXISTS `vivero13`;

USE `vivero13`;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `middleName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passwordHash` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `vendor` tinyint(1) NOT NULL DEFAULT '0',
  `registeredAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastLogin` datetime DEFAULT NULL,
  `intro` tinytext COLLATE utf8mb4_unicode_ci,
  `profile` text COLLATE utf8mb4_unicode_ci,
  `photo` longblob DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_mobile` (`mobile`),
  UNIQUE KEY `uq_email` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` bigint(20) NOT NULL,
  `title` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metaTitle` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` tinytext COLLATE utf8mb4_unicode_ci,
  `type` smallint(6) NOT NULL DEFAULT '0',
  `sku` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL DEFAULT '0',
  `discount` float NOT NULL DEFAULT '0',
  `quantity` smallint(6) NOT NULL DEFAULT '0',
  `shop` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `publishedAt` datetime DEFAULT NULL,
  `startsAt` datetime DEFAULT NULL,
  `endsAt` datetime DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_slug` (`slug`),
  KEY `idx_product_user` (`userId`),
  CONSTRAINT `fk_product_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` bigint(20) DEFAULT NULL,
  `sessionId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT '0',
  `subTotal` float NOT NULL DEFAULT '0',
  `itemDiscount` float NOT NULL DEFAULT '0',
  `tax` float NOT NULL DEFAULT '0',
  `shipping` float NOT NULL DEFAULT '0',
  `total` float NOT NULL DEFAULT '0',
  `promo` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` float NOT NULL DEFAULT '0',
  `grandTotal` float NOT NULL DEFAULT '0',
  `firstName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `middleName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `line1` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `line2` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `province` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `idx_order_user` (`userId`),
  CONSTRAINT `fk_order_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `order_item`;

CREATE TABLE `order_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `productId` bigint(20) NOT NULL,
  `orderId` bigint(20) NOT NULL,
  `sku` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL DEFAULT '0',
  `discount` float NOT NULL DEFAULT '0',
  `quantity` smallint(6) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `idx_order_item_product` (`productId`),
  KEY `idx_order_item_order` (`orderId`),
  CONSTRAINT `fk_order_item_order` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  CONSTRAINT `fk_order_item_product` FOREIGN KEY (`productId`) REFERENCES `product` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `transaction`;

CREATE TABLE `transaction` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` bigint(20) NOT NULL,
  `orderId` bigint(20) NOT NULL,
  `code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` smallint(6) NOT NULL DEFAULT '0',
  `mode` smallint(6) NOT NULL DEFAULT '0',
  `status` smallint(6) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `idx_transaction_user` (`userId`),
  KEY `idx_transaction_order` (`orderId`),
  CONSTRAINT `fk_transaction_order` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  CONSTRAINT `fk_transaction_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `image`;

CREATE TABLE `image` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `productId` bigint(20) NOT NULL,
  `title` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_image_product` (`productId`),
  CONSTRAINT `fk_image_product` FOREIGN KEY (`productId`) REFERENCES `product` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO `user` (`firstName`,`middleName`,`lastName`,`mobile`,`email`,`passwordHash`,`admin`,`vendor`,`registeredAt`,`lastLogin`,`intro`,`profile`,`photo`) VALUES ('Angelo','Michael','Huaraca','987654321','angelo.huaraca@gmail.com','password1',1,1,'2022-11-01 12:32:05','2022-11-09 20:27:06','Proveedor con 20 años de experiencia','Atención solo en Perú', null);
INSERT INTO `user` (`firstName`,`middleName`,`lastName`,`mobile`,`email`,`passwordHash`,`admin`,`vendor`,`registeredAt`,`lastLogin`,`intro`,`profile`,`photo`) VALUES ('Juan','Pablo','Gottardini','945865214','juan.gottardini@gmail.com','password2',1,1,'2022-11-01 18:32:05','2022-11-10 15:12:23','Proveedor con 30 años de experiencia','Atención solo en Argentina', null);
INSERT INTO `user` (`firstName`,`middleName`,`lastName`,`mobile`,`email`,`passwordHash`,`admin`,`vendor`,`registeredAt`,`lastLogin`,`intro`,`profile`,`photo`) VALUES ('Josue','Enrique','Quispe','999888777','josue.quispe@gmail.com','password3',0,1,'2022-11-02 12:32:54','2022-11-03 10:22:55','Proveedor con 10 años de experiencia','Atención solo en Chile', null);
INSERT INTO `user` (`firstName`,`middleName`,`lastName`,`mobile`,`email`,`passwordHash`,`admin`,`vendor`,`registeredAt`,`lastLogin`,`intro`,`profile`,`photo`) VALUES ('Jose','Luis','Figueroa','987456321','jose.figueroa@gmail.com','password4',0,0,'2022-11-05 07:23:44','2022-11-07 21:33:44',null, null, null);
INSERT INTO `user` (`firstName`,`middleName`,`lastName`,`mobile`,`email`,`passwordHash`,`admin`,`vendor`,`registeredAt`,`lastLogin`,`intro`,`profile`,`photo`) VALUES ('Frank','Alberto','Rodriguez','963258741','frank.rodriguez@gmail.com','password5',0,0,'2022-11-03 12:44:19','2022-11-10 06:33:44', null, null, null);

INSERT INTO `product` (`userId`,`title`,`metaTitle`,`slug`,`summary`,`type`,`sku`,`price`,`discount`,`quantity`,`shop`,`createdAt`,`updatedAt`,`publishedAt`,`startsAt`,`endsAt`,`content`) VALUES (1,'Bromelia','Planta Bromelia en Vivero13','bromelia','Planta de invierno',1,'P000001',50.00,0.00,10,1,'2022-11-02 22:46:04','2022-11-03 22:46:04','2022-11-02 23:46:04','2022-11-02 00:00:00','2022-12-02 23:59:59','Mantener en temperaturas entre 24-27°');
INSERT INTO `product` (`userId`,`title`,`metaTitle`,`slug`,`summary`,`type`,`sku`,`price`,`discount`,`quantity`,`shop`,`createdAt`,`updatedAt`,`publishedAt`,`startsAt`,`endsAt`,`content`) VALUES (2,'Violeta Africana','Planta Violeta Africana en Vivero13','violeta-africana','Planta de primavera',1,'P000002',100.00,0.05,20,1,'2022-11-02 22:46:28','2022-11-03 22:46:28','2022-11-02 23:46:28','2022-11-02 00:00:00','2022-12-02 23:59:59','Mantener en temperaturas entre 22-25°');
INSERT INTO `product` (`userId`,`title`,`metaTitle`,`slug`,`summary`,`type`,`sku`,`price`,`discount`,`quantity`,`shop`,`createdAt`,`updatedAt`,`publishedAt`,`startsAt`,`endsAt`,`content`) VALUES (3,'Medinilla','Planta Medinilla en Vivero13','medinilla','Planta de otoño',2,'P000003',120.00,0.10,30,1,'2022-11-03 22:46:04','2022-11-04 22:46:04','2022-11-03 23:46:04','2022-11-03 00:00:00','2022-12-03 23:59:59','Mantener en temperaturas entre 16-20°');
INSERT INTO `product` (`userId`,`title`,`metaTitle`,`slug`,`summary`,`type`,`sku`,`price`,`discount`,`quantity`,`shop`,`createdAt`,`updatedAt`,`publishedAt`,`startsAt`,`endsAt`,`content`) VALUES (4,'Bonsai','Planta Bonsai en Vivero13','bonsai','Planta de primavera',2,'P000004',160.00,0.15,40,1,'2022-11-06 22:46:28','2022-11-07 22:46:28','2022-11-06 23:46:28','2022-11-06 00:00:00','2022-12-06 23:59:59','Mantener en temperaturas entre 15-22°');
INSERT INTO `product` (`userId`,`title`,`metaTitle`,`slug`,`summary`,`type`,`sku`,`price`,`discount`,`quantity`,`shop`,`createdAt`,`updatedAt`,`publishedAt`,`startsAt`,`endsAt`,`content`) VALUES (4,'Cactus','Planta Cactus en Vivero13','cactus','Planta de verano',3,'P000005',200.00,0.20,0,0,'2022-11-04 22:46:28','2022-11-05 22:46:28','2022-11-04 23:46:28','2022-11-04 00:00:00','2022-12-04 23:59:59','Mantener en temperaturas entre 24-26°');

INSERT INTO `order` (`userId`,`sessionId`,`token`,`status`,`subTotal`,`itemDiscount`,`tax`,`shipping`,`total`,`promo`,`discount`,`grandTotal`,`firstName`,`middleName`,`lastName`,`mobile`,`email`,`line1`,`line2`,`city`,`province`,`country`,`createdAt`,`updatedAt`,`content`) VALUES (4,'4251bfcf87cb3baed5c309c7e8dbd4d4','aa8aeb0119bc33f2702acb6137048709', 0,100.00,0.00,18.00,20.00,138.00,null,0,138.00,'Jose','Luis','Figueroa','987456321','jose.figueroa@gmail.com','Bodega Tarija','Bodega San Bernardo', 'Tarija', 'Cercado ', 'Bolivia', '2022-11-14 12:16:18', '2022-11-14 15:16:18', 'Frente a restaurant Las Delicias');
INSERT INTO `order` (`userId`,`sessionId`,`token`,`status`,`subTotal`,`itemDiscount`,`tax`,`shipping`,`total`,`promo`,`discount`,`grandTotal`,`firstName`,`middleName`,`lastName`,`mobile`,`email`,`line1`,`line2`,`city`,`province`,`country`,`createdAt`,`updatedAt`,`content`) VALUES (5,'84266fdbd31d4c2c6d0665f7e8380fa3','3bbdfac9d110f77d85bfbcad291a928e', 1, 150.00,5.00,27.00,15.00,192.00,'PROMO00002',20.00,167.00,'Frank','Alberto','Rodriguez','963258741','frank.rodriguez@gmail.com','Bodega Colmena','Bodega Jorge Chavez', 'Maracaibo', 'Zulia', 'Venezuela', '2022-11-15 12:16:18', '2022-11-15 15:16:18', 'A dos cuadras de grifo El Sol');
INSERT INTO `order` (`userId`,`sessionId`,`token`,`status`,`subTotal`,`itemDiscount`,`tax`,`shipping`,`total`,`promo`,`discount`,`grandTotal`,`firstName`,`middleName`,`lastName`,`mobile`,`email`,`line1`,`line2`,`city`,`province`,`country`,`createdAt`,`updatedAt`,`content`) VALUES (5,'84266fdbd31d4c2c6d0665f7e8380fa3','3bbdfac9d110f77d85bfbcad291a928e', 2, 100.00,5.00,18.00,10.00,128.00,'PROMO00003',10.00,113.00,'Frank','Alberto','Rodriguez','963258741','frank.rodriguez@gmail.com','Bodega Colmena','Bodega Jorge Chavez', 'Maracaibo', 'Zulia', 'Venezuela', '2022-11-15 12:16:18', '2022-11-15 15:16:18', 'A dos cuadras de grifo El Sol');

INSERT INTO `order_item` (`productId`,`orderId`,`sku`,`price`,`discount`,`quantity`,`createdAt`,`updatedAt`,`content`) VALUES (1, 1, 'P000001', 50.00,0.00,2, '2022-11-15 12:16:18', '2022-11-15 15:16:18', 'Que no sean muy grandes por favor');
INSERT INTO `order_item` (`productId`,`orderId`,`sku`,`price`,`discount`,`quantity`,`createdAt`,`updatedAt`,`content`) VALUES (1, 2, 'P000001', 50.00,0.00,1, '2022-11-15 12:16:18', '2022-11-15 15:16:18', 'Sin macetero');
INSERT INTO `order_item` (`productId`,`orderId`,`sku`,`price`,`discount`,`quantity`,`createdAt`,`updatedAt`,`content`) VALUES (2, 2, 'P000002', 100.00,0.05,1, '2022-11-15 12:16:18', '2022-11-15 15:16:18', 'Con macetero');
INSERT INTO `order_item` (`productId`,`orderId`,`sku`,`price`,`discount`,`quantity`,`createdAt`,`updatedAt`,`content`) VALUES (2, 2, 'P000002', 100.00,0.05,1,'2022-11-15 12:16:18', '2022-11-15 15:16:18', 'Con tierra en la maceta');

INSERT INTO `transaction` (`userId`,`orderId`,`code`,`type`,`mode`,`status`,`createdAt`,`updatedAt`,`content`) VALUES (4, 1, '0000000000000001', 1,5,0,'2022-11-15 17:16:18', '2022-11-15 17:16:18', 'new');
INSERT INTO `transaction` (`userId`,`orderId`,`code`,`type`,`mode`,`status`,`createdAt`,`updatedAt`,`content`) VALUES (5, 2, '0000000000000002', 1,5,6,'2022-11-15 18:16:18', '2022-11-15 18:16:18', 'success');
INSERT INTO `transaction` (`userId`,`orderId`,`code`,`type`,`mode`,`status`,`createdAt`,`updatedAt`,`content`) VALUES (5, 3, '0000000000000003', 0,5,5,'2022-11-15 19:16:18', '2022-11-15 19:16:18', 'rejected');