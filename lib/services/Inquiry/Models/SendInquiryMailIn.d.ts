import BaseIn from '../../../common/models/BaseIn';
export default class SendInquiryMailIn extends BaseIn {
    /**
     * 問合せ日時
     */
    tiawsDt: string;
    /**
     * 問合せ区分
     */
    tiawsKbn: string;
    /**
     * 問合せメール本文
     */
    tiawsniyTxt: string;
    /**
     * 問合せ者姓名称
     */
    tiawsshsiNm: string;
    /**
     * 問合せ者名名称
     */
    tiawsshmiNm: string;
    /**
     * 問合せ者市外局番号
     */
    tiawsshshgikykNo: string;
    /**
     * 問合せ者市内局番号
     */
    tiawsshshnikykNo: string;
    /**
     * 問合せ者加入者番号
     */
    tiawsshknyshNo: string;
    /**
     * 問合せ者メールアドレス
     */
    tiawsshMladdr: string;
    /**
     * 会員コード
     */
    kiinCd: string;
}
