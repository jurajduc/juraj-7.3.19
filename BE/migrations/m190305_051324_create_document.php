<?php

use yii\db\Migration;

class m190305_051324_create_document extends Migration
{
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
        $this->createTable("documents", [
            "id" => $this->primaryKey(),
            "title" => $this->string()->notNull(),
            "description" => $this->string(),
            "file" => $this->string()->notNull(),
            "created_at" => $this->timestamp()->defaultExpression('NOW()'),
            "updated_at" => $this->timestamp()->defaultExpression('NOW()'),
        ]);    
    }

    public function safeDown()
    {
        $this->dropTable("documents");
    }

}
