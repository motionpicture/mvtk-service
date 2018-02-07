import FilmCastResult from './FilmCastResult';
import FilmGenreResult from './FilmGenreResult';
import FilmPhotoGalleryResult from './FilmPhotoGalleryResult';
import FilmStaffResult from './FilmStaffResult';
import TicketInfoResult from './TicketInfoResult';
/**
 * 作品out
 * @class
 */
export default class FilmResult {
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * デバイス区分
     */
    dvcTyp: string;
    /**
     * 作品名称
     */
    skhnNm: string;
    /**
     * 全国公開開始年月日(YYYY/MM/DD)
     */
    znkkkkikishYmd: string;
    /**
     * 全国公開時期記述
     */
    znkkkkijkDspt: string;
    /**
     * ポスター画像URL
     */
    pstrgzUrl: string;
    /**
     * 作品コメント本文(解説)
     */
    skhncmmntKistsTxt: string;
    /**
     * 作品コメント本文(物語)
     */
    skhncmmntMngtrTxt: string;
    /**
     * 作品コメント本文(注釈-共通)
     */
    skhncmmntChshkKytsu: string;
    /**
     * 作品コメント本文(注釈-作品詳細)
     */
    skhncmmntChshkShsi: string;
    /**
     * 作品コメント本文(セールスコピー1)
     */
    skhncmmntSlscpy1Txt: string;
    /**
     * 作品コメント本文(セールスコピー2)
     */
    skhncmmntSlscpy2Txt: string;
    /**
     * 作品コメント本文(セールスコピー3)
     */
    skhncmmntSlscpy3Txt: string;
    /**
     * キャスト情報（itemArray）
     */
    cstInfo: FilmCastResult[];
    /**
     * スタッフ情報（itemArray）
     */
    stffInfo: FilmStaffResult[];
    /**
     * フォトギャラリー情報（itemArray）
     */
    phtgllryInfo: FilmPhotoGalleryResult[];
    /**
     * 作品名オリジナル名称
     */
    skhmmiorgnlNm: string;
    /**
     * 制作年
     */
    siskY: string;
    /**
     * 製作国名称
     */
    siskkkNm: string;
    /**
     * 配給会社名称
     */
    hikygishNm: string;
    /**
     * 上映時間分
     */
    jeiTmm: string;
    /**
     * 映倫レイティングコード
     */
    eirnrtngCd: string;
    /**
     * 公式サイトURL
     */
    kshkstUrl: string;
    /**
     * 作品著作権記述
     */
    skhnchskknDspt: string;
    /**
     * ジャンル情報（itemArray）
     */
    gnrInfo: FilmGenreResult[];
    /**
     *  観たい登録者数
     */
    mtitrksyNum: string;
    /**
     * 観たい登録済フラグ
     */
    mtitrkzmFlg: string;
    /**
     * 鑑賞券販売フラグ
     */
    knshknhmbiFlg: string;
    /**
     * 鑑賞券販売開始日時
     */
    knshknhmbikishYmd: string;
    /**
     * 鑑賞券販売終了年月日
     */
    knshknhmbishryYmd: string;
    /**
     * ECサイト販売承認済みフラグ
     */
    ecsthmbishnnzmFlg: string;
    /**
     * 座席予約終了フラグ
     */
    zskyykshryFlg: string;
    /**
     * 予告編URL
     */
    ykkhnUrl: string;
    /**
     * 予告編番号
     */
    ykkhnNo: string;
    /**
     * 購入特典フラグ
     */
    knytktnFlg: string;
    /**
     * 観たいフラグ
     */
    mtiFlg: string;
    /**
     * 予告編有りフラグ
     */
    ykkhnarFlg: string;
    /**
     * 売れ筋ランキング
     */
    urszrnkngNo: string;
    /**
     * 期待度ランキング
     */
    ktidrnkngNo: string;
    /**
     * 注目度ランキング
     */
    chmkdrnkngNo: string;
    /**
     * 作品アクセスランキング順位
     */
    skhnaccssrnkngNo: string;
    /**
     * 予告編アクセスランキング順位
     */
    ykkhnaccssrnkngNo: string;
    /**
     * 話題・感想数
     */
    wdiknsNum: string;
    /**
     * 話題性ランキング順位
     */
    wdisirnkngNo: string;
    /**
     * 興行ランキング順位
     */
    kgyrnkngNo: string;
    /**
     * 鑑賞券情報(itemArray)
     */
    knshknInfo: TicketInfoResult[];
    /**
     * 主管配給会社コード
     */
    shknhikygishCd: string;
    /**
     * 特典在庫状況メッセージ本文 (在庫僅少、在庫切れ時表示メッセージ（HTMLタグを含む）)
     */
    tktnzikjkymsgTxt: string[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmResult} 作品out
     */
    static parse(resultObject: any): FilmResult;
    /**
     * 公開状態かどうかを取得する
     *
     * @return {boolean}
     */
    isShowing(): boolean;
    /**
     * 媒体区分が電子券のチケットがあるかどうか
     *
     * @return {boolean}
     */
    hasOnlinetTicket(): boolean;
    /**
     * チケットリストから、媒体区分が電子券のチケットを取得する
     *
     * @return {TicketInfoResult}
     */
    getOnlineTicket(): TicketInfoResult | null;
    getCastNames(leadingFilter?: boolean): string;
    /**
     * 監督名リストを取得する
     */
    getDirectors(): string[];
    /**
     * スタッフデータを生成
     */
    getStaffs(): FilmStaffResult[];
}
