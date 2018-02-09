import { Service } from '../../common/Service';
import { GetCodeNameResult } from './models/GetCodeNameResult';
/**
 * UtilService
 */
export declare class UtilService extends Service {
    /**
     * 都道府県コード検索
     *
     * @param string  $prefectureCode 都道府県コード
     * @param boolean $addBlank       trueにすると一覧にブランク用が追加される
     * @return array
     *
     * @throws sfMovieticketAPIException
     */
    getPrefectureCode(_prefectureCode: string, _addBlank: boolean): Promise<void>;
    /**
     * ムビチケ対応劇場都道府県コード検索
     *
     * @param string  $prefectureCode 都道府県コード。現状は指定しても都道府県一覧に影響しない
     * @param boolean $addBlank       trueにすると一覧にブランク用が追加される
     * @return array
     *
     * @throws sfMovieticketAPIException
     */
    getPrefectureCodeWithMvitckttio(_prefectureCode: string, _addBlank: boolean): Promise<void>;
    /**
     * 会員認証クッキー追加
     *
     * API側で会員情報がセッションに追加され、セッションクッキーが発行される。
     *
     * @param kiinCd ムビチケ会員コード
     */
    signIn(kiinCd: string): Promise<{
        response: any;
        result: string;
    }>;
    /**
     * サインアウト
     *
     * API側のセッション情報を破棄
     */
    signOut(): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 電子券QRコード生成
     *
     * @param knyknrNo 購入管理番号
     * @param pinCd    PINコード（購入者電話番号下４桁）
     */
    createQrCode(knyknrNo: string, pinCd: string): Promise<{
        response: any;
        result: string;
    }>;
    /**
     * 暗号化
     *
     * @return string 暗号化した文字列
     *
     * @throws sfMovieticketAPIException
     */
    encryptData(_value: string): void;
    /**
     * 暗号化（配列）
     *
     */
    encryptDataList(params: Object): Promise<{
        response: any;
        result: string[];
    }>;
    /**
     * 各種コード検索
     *
     * @param kmkTyp 項目区分
     * @param typ 区分
     * @param blnkarFlg ブランク有フラグ
     */
    getCodeName(kmkTyp: string, typ: string, blnkarFlg: string): Promise<{
        response: any;
        result: GetCodeNameResult;
    }>;
}
