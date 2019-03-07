<?php
namespace app\controllers;

use Yii;
use yii\rest\ActiveController;
use app\models\DocumentUploadForm;
use yii\web\UploadedFile;


class DocumentController extends ActiveController
{

    public $modelClass = 'app\models\Document';

    public function behaviors(){
        $behaviors = parent::behaviors();
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Origin' => ['http://localhost:5001'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'DELETE', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Expose-Headers' => ['X-Pagination-Current-Page', 'X-Pagination-Page-Count', 'X-Pagination-Per-Page', 'X-Pagination-Total-Count'],
            ],
        ];

        return $behaviors;
    }

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['create']);
        return $actions;
    }

    public function actionCreate(){

        $model = new DocumentUploadForm();

        if (Yii::$app->request->isPost) {
            $model->load(Yii::$app->request->post());
            $model->file = UploadedFile::getInstance($model, 'file');

            if ($document = $model->upload()) {
                return $document;
            } else {
                Yii::error(var_export("====== ELSE - UPLOAD FAILED =====", true));
                throw new \yii\web\BadRequestHttpException;
            }
        }


    }



}
