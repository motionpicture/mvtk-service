import Service from '../../Common/Service';
import GetCodeNameResult from './Models/GetCodeNameResult';
export default class UtilService extends Service {
    /**
     * 都道府県コード検索
     *
     * @param string  $prefectureCode 都道府県コード
     * @param boolean $addBlank       trueにすると一覧にブランク用が追加される
     * @return array
     *
     * @throws sfMovieticketAPIException
     */
    getPrefectureCode(prefectureCode?: string, addBlank?: boolean): void;
    /**
     * ムビチケ対応劇場都道府県コード検索
     *
     * @param string  $prefectureCode 都道府県コード。現状は指定しても都道府県一覧に影響しない
     * @param boolean $addBlank       trueにすると一覧にブランク用が追加される
     * @return array
     *
     * @throws sfMovieticketAPIException
     */
    getPrefectureCodeWithMvitckttio(prefectureCode?: string, addBlank?: boolean): void;
    /**
     * 会員認証クッキー追加
     *
     * API側で会員情報がセッションに追加され、セッションクッキーが発行される。
     *
     * @param {string} kiinCd ムビチケ会員コード
     */
    signIn(kiinCd: string, cb: (err, response, cookieString: string) => void): void;
    /**
     * サインアウト
     *
     * API側のセッション情報を破棄
     */
    signOut(cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 電子券QRコード生成
     *
     * @param {string}  knyknrNo 購入管理番号
     * @param {string}  pinCd    PINコード（購入者電話番号下４桁）
     */
    createQrCode(knyknrNo: any, pinCd: any, cb: (err, response, qrcdUrl: string) => void): void;
    /**
     * 暗号化
     *
     * @param string $value
     * @return string 暗号化した文字列
     *
     * @throws sfMovieticketAPIException
     */
    encryptData(value: any): void;
    /**
     * 暗号化（配列）
     *
     * @param {Object} values
     */
    encryptDataList(params: Object, cb: (err, response, encryptedStrings: Array<string>) => void): void;
    /**
     * 各種コード検索
     *
     * @param {string} kmkTyp 項目区分
     * @param {string} typ 区分
     * @param {string} blnkarFlg ブランク有フラグ
     */
    getCodeName(kmkTyp: string, typ: string, blnkarFlg: string, cb: (err, response, getCodeNameResult: GetCodeNameResult) => void): void;
}
