/**
 * Defines constants, enums, and utility functions for use with the Film service.
 */
export default class FilmUtilities {
    /**
     * チケット媒体区分
     */
    public static TCKTBITI_TYP_ELECTRON_TICKET = '01'; // 電子券（オンライン券）
    public static TCKTBITI_TYP_ELECTRON_VOUCHAER = '02'; // 電子バウチャー
    public static TCKTBITI_TYP_CARD_TICKET = '03'; // カード券

    /**
     * 表示箇所区分（PC）
     */
    public static BNNRHYJKSH_TYP_PC_FILM_RIGHT = '01';
    public static BNNRHYJKSH_TYP_PC_FILM_BOTTOM = '02';
    public static BNNRHYJKSH_TYP_PC_PURCHASE = '03';

    /**
     * 表示箇所区分（SP)
     */
    public static BNNRHYJKSH_TYP_SP_UNUSED = '01';
    public static BNNRHYJKSH_TYP_SP_FILM = '02';
    public static BNNRHYJKSH_TYP_SP_PURCHASE = '03';
}