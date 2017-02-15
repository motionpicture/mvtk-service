import TicketInfoTypeResult from './TicketInfoTypeResult';
/**
 * 鑑賞券情報検索out
 */
export default class TicketInfoResult {
    /**
     * 鑑賞券管理番号
     */
    knshknknrNo: string;
    /**
     * チケット媒体区分
     */
    tcktbitiTyp: string;
    /**
     * 鑑賞券オーナー区分
     */
    knshknownrTyp: string;
    /**
     * 鑑賞券オーナーコード
     */
    knshknownrCd: string;
    /**
     * 鑑賞券販売開始年月日(20160523)
     */
    knshknhmbikishYmd: string;
    /**
     * 鑑賞券販売開始時刻 Hi形式(sがないので注意)(0000)
     */
    knshknhmbikishHms: string;
    /**
     * 鑑賞券販売終了年月日(20160731)
     */
    knshknhmbishryYmd: string;
    /**
     * チェーンマスタコード
     */
    chanmstCd: string;
    /**
     * 預り金支払タイミング区分
     */
    azkrknshhritmngTyp: string;
    /**
     * 預り金支払先区分
     */
    azkrknshhriskTyp: string;
    /**
     * ３Ｄメガネ代金単価(100.000)
     */
    thredmgndiknUnip: string;
    /**
     * 販売時３Ｄメガネ代金支払先区分
     */
    hmbijthredmgndiknshhriskTyp: string;
    /**
     * 未着券精算年月日
     */
    mchkknsisnYmd: string;
    /**
     * 興行ギフト券フラグ
     */
    kgygftknFlg: string;
    /**
     * 興行ギフト券有効期間
     */
    kgygftknykTm: string;
    /**
     * 購入上限枚数
     */
    knyjgmmiNum: string;
    /**
     * ECサイト販売承認済フラグ
     */
    ecsthmbishnnzmFlg: string;
    /**
     * ECサイト販売承認者コード
     */
    ecsthmbishnnshCd: string;
    /**
     * ECサイト販売承認日時(2016-05-23 21:26:33)
     */
    ecsthmbishnnDt: string;
    /**
     * 登録ステータス区分
     */
    trksttsTyp: string;
    /**
     * 鑑賞券明細情報(itemArray)
     */
    knshkmmisiInfo: TicketInfoTypeResult[];
    /**
     * 券種情報(itemArray)
     */
    knshInfo: TicketInfoTypeResult[];
    static PARSE(resultObject: any): TicketInfoResult;
    /**
     * 販売状態かどうかを取得する
     *
     * @return {boolean}
     */
    isOnSale(): boolean;
}
