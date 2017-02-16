import BaseIn from '../../../Common/models/BaseIn';
/**
 * 一時管理テーブル（情報）削除inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class DeleteIchjknrInfoIn extends BaseIn {
    accessIdList: string[] | null;
    toXml(): string;
}
/**
 * 一時管理テーブル（情報）削除in
 * @interface
 */
export interface IDeleteIchjknrInfoIn {
    /**
     * 取引ＩＤリスト
     */
    accessIdList: string[];
}
