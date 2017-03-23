import Service from '../../Common/Service';
import GetCodeNameResult from './Models/GetCodeNameResult';
/**
 * UtilService
 * @class
 * @extends {Service}
 */
export default class UtilService extends Service {
    /**
     * 会員認証クッキー追加
     *
     * API側で会員情報がセッションに追加され、セッションクッキーが発行される。
     *
     * @param {string} kiinCd ムビチケ会員コード
     */
    signIn(kiinCd: string, cb: (err: any, response: any, cookieString: string | null) => void): void;
    /**
     * サインアウト
     *
     * API側のセッション情報を破棄
     */
    signOut(cb: (err: any, response: any, isSuccess: boolean) => void): void;
    /**
     * 電子券QRコード生成
     *
     * @param {string}  knyknrNo 購入管理番号
     * @param {string}  pinCd    PINコード（購入者電話番号下４桁）
     */
    createQrCode(knyknrNo: string, pinCd: string, cb: (err: any, response: any, qrcdUrl: string | null) => void): void;
    /**
     * 暗号化（配列）
     *
     * @param {Object} values
     */
    encryptDataList(params: Object, cb: (err: any, response: any, encryptedStrings: string[] | null) => void): void;
    /**
     * 各種コード検索
     *
     * @param {string} kmkTyp 項目区分
     * @param {string} typ 区分
     * @param {string} blnkarFlg ブランク有フラグ
     */
    getCodeName(kmkTyp: string, typ: string, blnkarFlg: string, cb: (err: any, response: any, getCodeNameResult: GetCodeNameResult) => void): void;
}
