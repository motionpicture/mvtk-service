/**
 * MemberInfoUtilities
 */
// tslint:disable-next-line:no-unnecessary-class no-stateless-class
export class MemberInfoUtilities {
    /**
     * メールアドレス区分
     */
    public static KIINMLADDRSSDVC_TYP_PC: string = '01';
    public static KIINMLADDRSSDVC_TYP_MOBILE: string = '02';

    /**
     * 性別区分
     */
    public static SIBTS_TYP_MEN: string = '01';
    public static SIBTS_TYP_WOMEN: string = '02';
    public static SIBTS_TYP_OTHER: string = '03';
}

export interface IMemberInfoUtilities {
    /**
     * メールアドレス区分 PC
     */
    KIINMLADDRSSDVC_TYP_PC: string;
    /**
     * メールアドレス区分 SP
     */
    KIINMLADDRSSDVC_TYP_MOBILE: string;

    /**
     * 性別区分 男
     */
    SIBTS_TYP_MEN: string;
    /**
     * 性別区分 女
     */
    SIBTS_TYP_WOMEN: string;
    /**
     * 性別区分 その他
     */
    SIBTS_TYP_OTHER: string;
}
