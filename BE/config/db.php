<?php
    return [
      'class' => 'yii\db\Connection',
      'dsn' => 'pgsql:host=db;port=5432;dbname=postgres',
      'username' => 'postgres',
      'password' => 'postgres',
      'charset' => 'utf8',
      'schemaMap' => [
        'pgsql'=> [
        'class'=>'yii\db\pgsql\Schema',
        'defaultSchema' => 'public' //specify your schema here
        ]
      ], // PostgreSQL
    ];
