create database surfDatabase;

CREATE TABLE `contactUs` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `msg` text NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `userBlog` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `msg` text NOT NULL,
  `gender` varchar(6) NOT NULL,
  `submitDate` date NOT NULL,
  `imgName` varchar(20),
  PRIMARY KEY  (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL auto_increment,
  `userName` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL auto_increment,
  `userName` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

CREATE TABLE `set` (
  `id` int(11) NOT NULL auto_increment,
  `set` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

CREATE TABLE `color` (
  `setID` int(11) NOT NULL,
  `color` varchar(64) NOT NULL
);

CREATE TABLE `probability` (
  `setID` int(11) NOT NULL,
  `probability` varchar(64) NOT NULL
);

CREATE TABLE `name` (
  `setID` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
);
/*
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `msg` text NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
*/
