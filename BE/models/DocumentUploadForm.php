<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\web\UploadedFile;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

class DocumentUploadForm extends Model
{
    /**
     * @var UploadedFile
     */
    public $title;
    public $description;
    public $file;

    public function behaviors()
    {
        return [
            [
                "class" => TimeStampBehavior::className(),
                "value" => new Expression("NOW()"),
            ],
        ];
    }


    public function rules()
    {
        return [
            [['title','description'], 'string', 'max'=> 255],
            [['file'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif, pdf, doc, docx, xls, xlsx'],
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            $fileName = 'uploads/' . time() . '_' . $this->file->baseName . '.' . $this->file->extension;
            $this->file->saveAs($fileName);
            $documentModel = new Document();
            $documentModel->title = $this->title;
            $documentModel->description = $this->description;
            $documentModel->file = $fileName;
            if($documentModel->save()) {
                Yii::$app->response->statusCode = 201;
                return $documentModel;
            }
            return false;

        } else {
            return false;
        }
    }
}
