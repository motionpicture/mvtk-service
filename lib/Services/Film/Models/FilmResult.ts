import CommonUtil from '../../../common/util/Util';
import FilmUtilities from '../FilmUtilities';
import TicketInfoResult from './TicketInfoResult';
import FilmCastResult from './FilmCastResult';
import FilmGenreResult from './FilmGenreResult';
import FilmPhotoGalleryResult from './FilmPhotoGalleryResult';
import FilmStaffResult from './FilmStaffResult';

export default class FilmResult {
    /**
     * 作品コード
     */
    public skhnCd: string;
    /**
     * デバイス区分
     */
    public dvcTyp: string;
    /**
     * 作品名称
     */
    public skhnNm: string;
    /**
     * 全国公開開始年月日(YYYY/MM/DD)
     */
    public znkkkkikishYmd: string;
    /**
     * 全国公開時期記述
     */
    public znkkkkijkDspt: string;
    /**
     * ポスター画像URL
     */
    public pstrgzUrl: string;
    /**
     * 作品コメント本文(解説)
     */
    public skhncmmntKistsTxt: string;
    /**
     * 作品コメント本文(物語)
     */
    public skhncmmntMngtrTxt: string;
    /**
     * 作品コメント本文(注釈-共通)
     */
    public skhncmmntChshkKytsu: string;
    /**
     * 作品コメント本文(注釈-作品詳細)
     */
    public skhncmmntChshkShsi: string;
    /**
     * 作品コメント本文(セールスコピー1)
     */
    public skhncmmntSlscpy1Txt: string;
    /**
     * 作品コメント本文(セールスコピー2)
     */
    public skhncmmntSlscpy2Txt: string;
    /**
     * 作品コメント本文(セールスコピー3)
     */
    public skhncmmntSlscpy3Txt: string;
    /**
     * キャスト情報（itemArray）
     */
    public cstInfo: Array<FilmCastResult>;
    /**
     * スタッフ情報（itemArray）
     */
    public stffInfo: Array<FilmStaffResult>;
    /**
     * フォトギャラリー情報（itemArray）
     */
    public phtgllryInfo: Array<FilmPhotoGalleryResult>;
    /**
     * 作品名オリジナル名称
     */
    public skhmmiorgnlNm: string;
    /**
     * 制作年
     */
    public siskY: string;
    /**
     * 製作国名称
     */
    public siskkkNm: string;
    /**
     * 配給会社名称
     */
    public hikygishNm: string;
    /**
     * 上映時間分
     */
    public jeiTmm: string;
    /**
     * 映倫レイティングコード
     */
    public eirnrtngCd: string;
    /**
     * 公式サイトURL
     */
    public kshkstUrl: string;
    /**
     * 作品著作権記述
     */
    public skhnchskknDspt: string;
    /**
     * ジャンル情報（itemArray）
     */
    public gnrInfo: Array<FilmGenreResult>;
    /**
     *  観たい登録者数
     */
    public mtitrksyNum: string; //
    /**
     * 観たい登録済フラグ
     */
    public mtitrkzmFlg: string;
    /**
     * 鑑賞券販売フラグ
     */
    public knshknhmbiFlg: string;
    /**
     * 鑑賞券販売開始日時
     */
    public knshknhmbikishYmd: string;
    /**
     * 鑑賞券販売終了年月日
     */
    public knshknhmbishryYmd: string;
    /**
     * ECサイト販売承認済みフラグ
     */
    public ecsthmbishnnzmFlg: string;
    /**
     * 座席予約終了フラグ
     */
    public zskyykshryFlg: string;

    // 以下は、作品検索APIのOUTにのみ含まれる(詳細APIには含まれない)
    /**
     * 予告編URL
     */
    public ykkhnUrl: string;
    /**
     * 予告編番号
     */
    public ykkhnNo: string;
    /**
     * 購入特典フラグ
     */
    public knytktnFlg: string;
    /**
     * 観たいフラグ
     */
    public mtiFlg: string;
    /**
     * 予告編有りフラグ
     */
    public ykkhnarFlg: string;
    /**
     * 売れ筋ランキング
     */
    public urszrnkngNo: string;
    /**
     * 期待度ランキング
     */
    public ktidrnkngNo: string;
    /**
     * 注目度ランキング
     */
    public chmkdrnkngNo: string;
    /**
     * 作品アクセスランキング順位
     */
    public skhnaccssrnkngNo: string;
    /**
     * 予告編アクセスランキング順位
     */
    public ykkhnaccssrnkngNo: string;
    /**
     * 話題・感想数
     */
    public wdiknsNum: string;
    /**
     * 話題性ランキング順位
     */
    public wdisirnkngNo: string;
    /**
     * 興行ランキング順位
     */
    public kgyrnkngNo: string;
    /**
     * 鑑賞券情報(itemArray)
     */
    public knshknInfo: Array<TicketInfoResult>;

    public static parse (resultObject): FilmResult {
        let filmResult = new FilmResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'knshknInfo') {
                let ticketInfos: Array<TicketInfoResult> = [];

                if (property !== null && property.hasOwnProperty('KnshknInfo')) {
                    if (Array.isArray(property.KnshknInfo)) {
                        for (let info of property.KnshknInfo) {
                            ticketInfos.push(TicketInfoResult.parse(info));
                        }
                    } else {
                        ticketInfos.push(TicketInfoResult.parse(property.KnshknInfo));
                    }
                }

                filmResult[normalizedName] = ticketInfos;
            } else if (normalizedName === 'cstInfo') {
                let casts: Array<FilmCastResult> = [];

                if (property !== null && property.hasOwnProperty('CstInfo')) {
                    if (Array.isArray(property.CstInfo)) {
                        for (let info of property.CstInfo) {
                            casts.push(FilmCastResult.parse(info));
                        }
                    } else {
                        casts.push(FilmCastResult.parse(property.CstInfo));
                    }
                }

                filmResult[normalizedName] = casts;
            } else if (normalizedName === 'gnrInfo') {
                let genres: Array<FilmGenreResult> = [];

                if (property !== null && property.hasOwnProperty('GnrInfo')) {
                    if (Array.isArray(property.GnrInfo)) {
                        for (let info of property.GnrInfo) {
                            genres.push(FilmGenreResult.parse(info));
                        }
                    } else {
                        genres.push(FilmGenreResult.parse(property.GnrInfo));
                    }
                }

                filmResult[normalizedName] = genres;
            } else if (normalizedName === 'phtgllryInfo') {
                let galleries: Array<FilmPhotoGalleryResult> = [];

                if (property !== null && property.hasOwnProperty('PhtgllryInfo')) {
                    if (Array.isArray(property.PhtgllryInfo)) {
                        for (let info of property.PhtgllryInfo) {
                            galleries.push(FilmPhotoGalleryResult.parse(info));
                        }
                    } else {
                        galleries.push(FilmPhotoGalleryResult.parse(property.PhtgllryInfo));
                    }
                }

                filmResult[normalizedName] = galleries;
            } else if (normalizedName === 'stffInfo') {
                let staffs: Array<FilmStaffResult> = [];

                if (property !== null && property.hasOwnProperty('StffInfo')) {
                    if (Array.isArray(property.StffInfo)) {
                        for (let info of property.StffInfo) {
                            staffs.push(FilmStaffResult.parse(info));
                        }
                    } else {
                        staffs.push(FilmStaffResult.parse(property.StffInfo));
                    }
                }

                filmResult[normalizedName] = staffs;
            } else {
                filmResult[normalizedName] = property;
            }
        }

        return filmResult;
    };

    /**
     * 公開状態かどうかを取得する
     *
     * @return {boolean}
     */
    public isShowing(): boolean {
        if (!this.znkkkkikishYmd) {
            return false;
        }

        // YYYY/MM/DD HH:ii:ss形式にする
        let startDate = new Date(this.znkkkkikishYmd + ' 00:00:00');
        var startTimestamp = startDate.getTime();

        let nowDate = new Date();
        var nowTimestamp = nowDate.getTime();

        return nowTimestamp >= startTimestamp;
    }

    /**
     * 媒体区分が電子券のチケットがあるかどうか
     *
     * @return {boolean}
     */
    public hasOnlinetTicket() {
        return (this.getOnlineTicket() !== null);
    }

    /**
     * チケットリストから、媒体区分が電子券のチケットを取得する
     *
     * @return {TicketInfoResult}
     */
    public getOnlineTicket(): TicketInfoResult {
        if (Array.isArray(this.knshknInfo)) {
            for (let ticketInfo of this.knshknInfo) {
                if (ticketInfo.tcktbitiTyp === FilmUtilities.TCKTBITI_TYP_ELECTRON_TICKET) {
                    return ticketInfo;
                }
            }
        }

        return null;
    }

    public getCastNames(leadingFilter: boolean = false): string {
        // 表示順でソート
        let compare = (a: FilmCastResult, b: FilmCastResult) => {
            let aHyjjnNo = (a.cstHyjjnNo) ? parseInt(a.cstHyjjnNo) : 0;
            let bHyjjnNo = (b.cstHyjjnNo) ? parseInt(b.cstHyjjnNo) : 0;

            if (aHyjjnNo > bHyjjnNo) {
                return 1;
            } else if (aHyjjnNo < bHyjjnNo) {
                return -1;
            } else {
                return 0;
            }
        }

        this.cstInfo.sort(compare);

        //主役フィルター
        if (leadingFilter) {
            let cast: string[] = []; 
            for (let info of this.cstInfo) {
                if (info.cstShenFlg === '1') {
                    cast.push(info.cstJmbtsNm);
                }
            }
            return cast.join('、');
        }

        return this.cstInfo.map((info) => {
            return info.cstJmbtsNm;
        }).join('、');
    }

    /**
     * 監督名リストを取得する
     */
    public getDirectors(): Array<string> {
        let directers: Array<string> = [];

        for (let staff of this.stffInfo) {
            if (staff.stffYkwrNm === '監督') {
                directers.push(staff.stffJmbtsNm);
            }
        }

        return directers;
    }

    /**
     * スタッフデータを生成
     */
    public getStaffs(): Array<FilmStaffResult> {
        // 表示順でソート
        let compare = (a: FilmStaffResult, b: FilmStaffResult) => {
            let aHyjjnNo = (a.stffHyjjnNo) ? parseInt(a.stffHyjjnNo) : 0;
            let bHyjjnNo = (b.stffHyjjnNo) ? parseInt(b.stffHyjjnNo) : 0;

            if (aHyjjnNo > bHyjjnNo) {
                return 1;
            } else if (aHyjjnNo < bHyjjnNo) {
                return -1;
            } else {
                return 0;
            }
        }

        this.stffInfo.sort(compare);

        // $result = array();

        // foreach ($staffs as $staff) {
        // // 役割名をキーに
        //     $key = $staff->getYakuwariName();
        //     if (false === isset($result[$key])) {
        //     $result[$key] = array();
        //     }

        //     $result[$key][] = $staff->getName();
        // }

        return this.stffInfo;
    }
}
