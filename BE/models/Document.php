<?php

namespace app\models;

use Yii;
use yii\helpers\Url;

/**
 * This is the model class for table "documents".
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $file
 */
class Document extends \yii\db\ActiveRecord
{

    private $filePath;
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'documents';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['title', 'description', 'file'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'description' => 'Description',
            'file' => 'File',
        ];
    }

    public function afterFind()
    {
        if($this->file) {
            $this->filePath = $this->file;
            $this->file = Url::to($this->file, true);
        }
        return true;
    }

    public function afterDelete()
    {
      if(file_exists ($this->filePath)) {
        unlink($this->filePath);
      }
    }
}
