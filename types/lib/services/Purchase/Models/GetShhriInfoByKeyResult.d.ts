/**
 * 支払先情報取得out
 * @class
 */
export default class GetShhriInfoByKeyResult {
    azkrknshhritmngTyp: string;
    azkrknshhriskTyp: string;
    hmbijthredmgndiknshhriskTyp: string;
    static parse(resultObject: any): GetShhriInfoByKeyResult;
}