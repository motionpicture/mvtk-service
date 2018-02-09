"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines constants, enums, and utility functions for use with the Film service.
 */
class FilmUtilities {
}
/**
 * チケット媒体区分
 */
FilmUtilities.TCKTBITI_TYP_ELECTRON_TICKET = '01'; // 電子券（オンライン券）
FilmUtilities.TCKTBITI_TYP_ELECTRON_VOUCHAER = '02'; // 電子バウチャー
FilmUtilities.TCKTBITI_TYP_CARD_TICKET = '03'; // カード券
/**
 * 表示箇所区分（PC）
 */
FilmUtilities.BNNRHYJKSH_TYP_PC_FILM_RIGHT = '01';
FilmUtilities.BNNRHYJKSH_TYP_PC_FILM_BOTTOM = '02';
FilmUtilities.BNNRHYJKSH_TYP_PC_PURCHASE = '03';
/**
 * 表示箇所区分（SP)
 */
FilmUtilities.BNNRHYJKSH_TYP_SP_UNUSED = '01';
FilmUtilities.BNNRHYJKSH_TYP_SP_FILM = '02';
FilmUtilities.BNNRHYJKSH_TYP_SP_PURCHASE = '03';
exports.default = FilmUtilities;
