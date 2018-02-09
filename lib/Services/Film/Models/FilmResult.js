"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
const FilmUtilities_1 = require("../FilmUtilities");
const FilmCastResult_1 = require("./FilmCastResult");
const FilmGenreResult_1 = require("./FilmGenreResult");
const FilmPhotoGalleryResult_1 = require("./FilmPhotoGalleryResult");
const FilmStaffResult_1 = require("./FilmStaffResult");
const TicketInfoResult_1 = require("./TicketInfoResult");
/**
 * 作品out
 * @class
 */
class FilmResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmResult} 作品out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const filmResult = new FilmResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'knshknInfo') {
                const ticketInfos = [];
                if (property !== null && property.hasOwnProperty('KnshknInfo')) {
                    if (Array.isArray(property.KnshknInfo)) {
                        for (const info of property.KnshknInfo) {
                            ticketInfos.push(TicketInfoResult_1.default.parse(info));
                        }
                    }
                    else {
                        ticketInfos.push(TicketInfoResult_1.default.parse(property.KnshknInfo));
                    }
                }
                filmResult[normalizedName] = ticketInfos;
            }
            else if (normalizedName === 'cstInfo') {
                const casts = [];
                if (property !== null && property.hasOwnProperty('CstInfo')) {
                    if (Array.isArray(property.CstInfo)) {
                        for (const info of property.CstInfo) {
                            casts.push(FilmCastResult_1.default.parse(info));
                        }
                    }
                    else {
                        casts.push(FilmCastResult_1.default.parse(property.CstInfo));
                    }
                }
                filmResult[normalizedName] = casts;
            }
            else if (normalizedName === 'gnrInfo') {
                const genres = [];
                if (property !== null && property.hasOwnProperty('GnrInfo')) {
                    if (Array.isArray(property.GnrInfo)) {
                        for (const info of property.GnrInfo) {
                            genres.push(FilmGenreResult_1.default.parse(info));
                        }
                    }
                    else {
                        genres.push(FilmGenreResult_1.default.parse(property.GnrInfo));
                    }
                }
                filmResult[normalizedName] = genres;
            }
            else if (normalizedName === 'phtgllryInfo') {
                const galleries = [];
                if (property !== null && property.hasOwnProperty('PhtgllryInfo')) {
                    if (Array.isArray(property.PhtgllryInfo)) {
                        for (const info of property.PhtgllryInfo) {
                            galleries.push(FilmPhotoGalleryResult_1.default.parse(info));
                        }
                    }
                    else {
                        galleries.push(FilmPhotoGalleryResult_1.default.parse(property.PhtgllryInfo));
                    }
                }
                filmResult[normalizedName] = galleries;
            }
            else if (normalizedName === 'stffInfo') {
                const staffs = [];
                if (property !== null && property.hasOwnProperty('StffInfo')) {
                    if (Array.isArray(property.StffInfo)) {
                        for (const info of property.StffInfo) {
                            staffs.push(FilmStaffResult_1.default.parse(info));
                        }
                    }
                    else {
                        staffs.push(FilmStaffResult_1.default.parse(property.StffInfo));
                    }
                }
                filmResult[normalizedName] = staffs;
            }
            else if (normalizedName === 'tktnzikjkymsgTxt') {
                const tktnzikjkymsgTxts = [];
                if (property !== null && property.hasOwnProperty('string')) {
                    if (Array.isArray(property.string)) {
                        for (const tktnzikjkymsgTxt of property.string) {
                            tktnzikjkymsgTxts.push(tktnzikjkymsgTxt);
                        }
                    }
                    else {
                        tktnzikjkymsgTxts.push(property.string);
                    }
                }
                filmResult[normalizedName] = tktnzikjkymsgTxts;
            }
            else {
                filmResult[normalizedName] = property;
            }
        });
        return filmResult;
    }
    ;
    /**
     * 公開状態かどうかを取得する
     *
     * @return {boolean}
     */
    isShowing() {
        if (!this.znkkkkikishYmd) {
            return false;
        }
        // YYYY/MM/DD HH:ii:ss形式にする
        const startDate = new Date(this.znkkkkikishYmd + ' 00:00:00');
        const startTimestamp = startDate.getTime();
        const nowDate = new Date();
        const nowTimestamp = nowDate.getTime();
        return nowTimestamp >= startTimestamp;
    }
    /**
     * 媒体区分が電子券のチケットがあるかどうか
     *
     * @return {boolean}
     */
    hasOnlinetTicket() {
        return (this.getOnlineTicket() !== null);
    }
    /**
     * チケットリストから、媒体区分が電子券のチケットを取得する
     *
     * @return {TicketInfoResult}
     */
    getOnlineTicket() {
        if (Array.isArray(this.knshknInfo)) {
            for (const ticketInfo of this.knshknInfo) {
                if (ticketInfo.tcktbitiTyp === FilmUtilities_1.default.TCKTBITI_TYP_ELECTRON_TICKET) {
                    return ticketInfo;
                }
            }
        }
        return null;
    }
    getCastNames(leadingFilter = false) {
        // 表示順でソート
        const compare = (a, b) => {
            const radix = 10;
            const aHyjjnNo = (a.cstHyjjnNo) ? parseInt(a.cstHyjjnNo, radix) : 0;
            const bHyjjnNo = (b.cstHyjjnNo) ? parseInt(b.cstHyjjnNo, radix) : 0;
            if (aHyjjnNo > bHyjjnNo) {
                return 1;
            }
            else if (aHyjjnNo < bHyjjnNo) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this.cstInfo.sort(compare);
        //主役フィルター
        if (leadingFilter) {
            const cast = [];
            for (const info of this.cstInfo) {
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
    getDirectors() {
        const directers = [];
        for (const staff of this.stffInfo) {
            if (staff.stffYkwrNm === '監督') {
                directers.push(staff.stffJmbtsNm);
            }
        }
        return directers;
    }
    /**
     * スタッフデータを生成
     */
    getStaffs() {
        // 表示順でソート
        const compare = (a, b) => {
            const radix = 10;
            const aHyjjnNo = (a.stffHyjjnNo) ? parseInt(a.stffHyjjnNo, radix) : 0;
            const bHyjjnNo = (b.stffHyjjnNo) ? parseInt(b.stffHyjjnNo, radix) : 0;
            if (aHyjjnNo > bHyjjnNo) {
                return 1;
            }
            else if (aHyjjnNo < bHyjjnNo) {
                return -1;
            }
            else {
                return 0;
            }
        };
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
exports.default = FilmResult;
