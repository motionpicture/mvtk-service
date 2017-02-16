import BaseIn from '../../../Common/models/BaseIn';

/**
 * アンケート設問検索inクラス
 * @class
 * @extends {BaseIn}
 */
export class GetQuestionnaireListIn extends BaseIn {
    /**
     * 作品コード
     */
    public skhnCd: string;
}

/**
 * アンケート設問検索in
 * @interface
 */
export interface IGetQuestionnaireListIn {
    /**
     * 作品コード
     */
    skhnCd: string;
}
