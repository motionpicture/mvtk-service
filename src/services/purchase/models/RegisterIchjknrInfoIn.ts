import { BaseIn } from '../../../common/models/BaseIn';
// tslint:disable:max-line-length
/**
 * RegisterIchjknrInfoIn
 */
export class RegisterIchjknrInfoIn extends BaseIn {
    public ACCESS_ID: string; // 取引ID
    public ACCESS_PWD: string; // 取引パスワード
    public TKN_ID: string; // トークンID
    public KSSIKNR_NO: string; // 決済管理番号
    public HYJCRD_NO: string; // 表示カード番号
    public CRDMIGNN_NM: string; // カード名義人名称
    public CRDJHHJ_FLG: string; // カード情報保持フラグ
    public KNYSH_CD: string; // 購入者コード
    public KIIN_FLG: string; // 会員フラグ
    public KNYSHSI_NM: string; // 購入者姓名称
    public KNYSHMI_NM: string; // 購入者名名称
    public KNYSHSI_KNNM: string; // 購入者姓カナ名称
    public KNYSHMI_KNNM: string; // 購入者名カナ名称
    public KNYSHPC_MLADDR: string; // 購入者PCメールアドレス
    public KNYSHKITI_MLADDR: string; // 購入者携帯メールアドレス
    public KNYSHSHGIKYK_NO: string; // 購入者市外局番号
    public KNYSHSHNIKYK_NO: string; // 購入者市内局番号
    public KNYSHKNYSH_NO: string; // 購入者加入者番号
    public MLSF_FLG: string; // メール送付フラグ
    public SKHN_CD: string; // 作品コード
    public KNSHKNKNR_NO: string; // 鑑賞券管理番号
    public AZKRKNSHHRITMNG_TYP: string; // 預り金支払タイミング区分
    public AZKRKNSHHRISK_TYP: string; // 預り金支払先区分
    public THREDMGNDIKN_UNIP: number; // 3Dメガネ代金単価(type="xs:decimal"なので空を送信する際は、xmlの書き方に注意)
    public HMBIJTHREDMGNDIKNSHHRISK_TYP: string; // 販売時3Dメガネ代金支払先区分
    public TICKETICHJKNR_LIST: ArrayOfTicketichjknrList; // チケット一時管理リスト

    // tslint:disable-next-line:max-func-body-length
    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        // return {
        //     model: {
        //         RegisterIchjknrInfoIn: {
        //             ACCESS_ID: this.ACCESS_ID,
        //             ACCESS_PWD: this.ACCESS_PWD,
        //             AZKRKNSHHRISK_TYP: this.AZKRKNSHHRISK_TYP,
        //             AZKRKNSHHRITMNG_TYP: this.AZKRKNSHHRITMNG_TYP,
        //             CRDJHHJ_FLG: this.CRDJHHJ_FLG,
        //             CRDMIGNN_NM: this.CRDMIGNN_NM,
        //             HMBIJTHREDMGNDIKNSHHRISK_TYP: this.HMBIJTHREDMGNDIKNSHHRISK_TYP,
        //             HYJCRD_NO: this.HYJCRD_NO,
        //             KIIN_FLG: this.KIIN_FLG,
        //             KNSHKNKNR_NO: this.KNSHKNKNR_NO,
        //             KNYSHKITI_MLADDR: this.KNYSHKITI_MLADDR,
        //             KNYSHKNYSH_NO: this.KNYSHKNYSH_NO,
        //             KNYSHMI_KNNM: this.KNYSHMI_KNNM,
        //             KNYSHMI_NM: this.KNYSHMI_NM,
        //             KNYSHPC_MLADDR: this.KNYSHPC_MLADDR,
        //             KNYSHSHGIKYK_NO: this.KNYSHSHGIKYK_NO,
        //             KNYSHSHNIKYK_NO: this.KNYSHSHNIKYK_NO,
        //             KNYSHSI_KNNM: this.KNYSHSI_KNNM,
        //             KNYSHSI_NM: this.KNYSHSI_NM,
        //             KNYSH_CD: this.KNYSH_CD,
        //             KSSIKNR_NO: this.KSSIKNR_NO,
        //             MLSF_FLG: this.MLSF_FLG,
        //             SKHN_CD: this.SKHN_CD,
        //             THREDMGNDIKN_UNIP: this.THREDMGNDIKN_UNIP !== undefined && this.THREDMGNDIKN_UNIP !== null && (<any>this.THREDMGNDIKN_UNIP) !== '' ? Number(this.THREDMGNDIKN_UNIP) : undefined,
        //             TICKETICHJKNR_LIST: {
        //                 TicketichjknrList: this.TICKETICHJKNR_LIST.TicketichjknrList.map((info) => {
        //                     return {
        //                         KNSHKNHMBI_UNIP: Number(info.KNSHKNHMBI_UNIP),
        //                         KNSHKNKNRMISI_NO: info.KNSHKNKNRMISI_NO,
        //                         KNSHKNKNR_NO: info.KNSHKNKNR_NO,
        //                         KNYMI_NUM: Number(info.KNYMI_NUM),
        //                         MVITCKTHIKYFTNTSURY_UNIP: Number(info.MVITCKTHIKYFTNTSURY_UNIP),
        //                         MVITCKTKGYFTNTSURY_UNIP: Number(info.MVITCKTKGYFTNTSURY_UNIP),
        //                         MVITCKTUSRTSURY_UNIP: Number(info.MVITCKTUSRTSURY_UNIP),
        //                         SHHZI_RT: Number(info.SHHZI_RT),
        //                         SHHZI_TYP: info.SHHZI_TYP,
        //                         SHHZI_UNIP: Number(info.SHHZI_UNIP),
        //                         targetNSAlias: 'tns',
        //                         // tslint:disable-next-line:no-http-string max-line-length
        //                         targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterPurchaseInfoModel'
        //                     };
        //                 }),
        //                 targetNSAlias: 'tns',
        //                 // tslint:disable-next-line:no-http-string max-line-length
        //                 targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterPurchaseInfoModel'
        //             },
        //             TKN_ID: this.TKN_ID,
        //             targetNSAlias: 'tns',
        //             // tslint:disable-next-line:no-http-string max-line-length
        //             targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterPurchaseInfoModel'
        //         },
        //         targetNSAlias: 'q23',
        //         // tslint:disable-next-line:no-http-string max-line-length
        //         targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterPurchaseInfoModel'
        //     }
        // };

                let message = `
        <tns:RegisterIchjknr>
            <tns:model>
                <q23:RegisterIchjknrInfoIn>
                    <q23:ACCESS_ID>${this.ACCESS_ID}</q23:ACCESS_ID>
                    <q23:ACCESS_PWD>${this.ACCESS_PWD}</q23:ACCESS_PWD>
                    <q23:AZKRKNSHHRISK_TYP>${this.AZKRKNSHHRISK_TYP}</q23:AZKRKNSHHRISK_TYP>
                    <q23:AZKRKNSHHRITMNG_TYP>${this.AZKRKNSHHRITMNG_TYP}</q23:AZKRKNSHHRITMNG_TYP>
                    <q23:CRDJHHJ_FLG>${this.CRDJHHJ_FLG}</q23:CRDJHHJ_FLG>
                    <q23:CRDMIGNN_NM xsi:nil="true">${this.CRDMIGNN_NM}</q23:CRDMIGNN_NM>
                    <q23:HMBIJTHREDMGNDIKNSHHRISK_TYP>${this.HMBIJTHREDMGNDIKNSHHRISK_TYP}</q23:HMBIJTHREDMGNDIKNSHHRISK_TYP>
                    <q23:HYJCRD_NO xsi:nil="true">${this.HYJCRD_NO}</q23:HYJCRD_NO>
                    <q23:KIIN_FLG>${this.KIIN_FLG}</q23:KIIN_FLG>
                    <q23:KNSHKNKNR_NO>${this.KNSHKNKNR_NO}</q23:KNSHKNKNR_NO>
                    <q23:KNYSHKITI_MLADDR xsi:nil="true">${this.KNYSHKITI_MLADDR}</q23:KNYSHKITI_MLADDR>
                    <q23:KNYSHKNYSH_NO>${this.KNYSHKNYSH_NO}</q23:KNYSHKNYSH_NO>
                    <q23:KNYSHMI_KNNM>${this.KNYSHMI_KNNM}</q23:KNYSHMI_KNNM>
                    <q23:KNYSHMI_NM>${this.KNYSHMI_NM}</q23:KNYSHMI_NM>
                    <q23:KNYSHPC_MLADDR>${this.KNYSHPC_MLADDR}</q23:KNYSHPC_MLADDR>
                    <q23:KNYSHSHGIKYK_NO>${this.KNYSHSHGIKYK_NO}</q23:KNYSHSHGIKYK_NO>
                    <q23:KNYSHSHNIKYK_NO>${this.KNYSHSHNIKYK_NO}</q23:KNYSHSHNIKYK_NO>
                    <q23:KNYSHSI_KNNM>${this.KNYSHSI_KNNM}</q23:KNYSHSI_KNNM>
                    <q23:KNYSHSI_NM>${this.KNYSHSI_NM}</q23:KNYSHSI_NM>
                    <q23:KNYSH_CD>${this.KNYSH_CD}</q23:KNYSH_CD>
                    <q23:KSSIKNR_NO>${this.KSSIKNR_NO}</q23:KSSIKNR_NO>
                    <q23:MLSF_FLG>${this.MLSF_FLG}</q23:MLSF_FLG>
                    <q23:SKHN_CD>${this.SKHN_CD}</q23:SKHN_CD>
                    <q23:THREDMGNDIKN_UNIP xsi:nil="true">${(this.THREDMGNDIKN_UNIP !== undefined && this.THREDMGNDIKN_UNIP !== null && (<any>this.THREDMGNDIKN_UNIP) !== '') ? this.THREDMGNDIKN_UNIP : ''}</q23:THREDMGNDIKN_UNIP>
                    <q23:TICKETICHJKNR_LIST>
        `;

                for (const info of this.TICKETICHJKNR_LIST.TicketichjknrList) {
                    message += `
                        <q23:TicketichjknrList>
                            <q23:KNSHKNHMBI_UNIP>${info.KNSHKNHMBI_UNIP}</q23:KNSHKNHMBI_UNIP>
                            <q23:KNSHKNKNRMISI_NO>${info.KNSHKNKNRMISI_NO}</q23:KNSHKNKNRMISI_NO>
                            <q23:KNSHKNKNR_NO>${info.KNSHKNKNR_NO}</q23:KNSHKNKNR_NO>
                            <q23:KNYMI_NUM>${info.KNYMI_NUM}</q23:KNYMI_NUM>
                            <q23:MVITCKTHIKYFTNTSURY_UNIP>${info.MVITCKTHIKYFTNTSURY_UNIP}</q23:MVITCKTHIKYFTNTSURY_UNIP>
                            <q23:MVITCKTKGYFTNTSURY_UNIP>${info.MVITCKTKGYFTNTSURY_UNIP}</q23:MVITCKTKGYFTNTSURY_UNIP>
                            <q23:MVITCKTUSRTSURY_UNIP>${info.MVITCKTUSRTSURY_UNIP}</q23:MVITCKTUSRTSURY_UNIP>
                            <q23:SHHZI_RT>${info.SHHZI_RT}</q23:SHHZI_RT>
                            <q23:SHHZI_TYP>${info.SHHZI_TYP}</q23:SHHZI_TYP>
                            <q23:SHHZI_UNIP>${info.SHHZI_UNIP}</q23:SHHZI_UNIP>
                        </q23:TicketichjknrList>
        `;
                }

                message += `
                    </q23:TICKETICHJKNR_LIST>
                    <q23:TKN_ID>${this.TKN_ID}</q23:TKN_ID>
                </q23:RegisterIchjknrInfoIn>
            </tns:model>
        </tns:RegisterIchjknr>
        `;

        return { _xml: message };
    }
}

export interface ArrayOfTicketichjknrList {
    TicketichjknrList: Ticketichjknr[];
}

export interface Ticketichjknr {
    KNSHKNKNR_NO: string; // 鑑賞券管理番号
    KNSHKNKNRMISI_NO: string; // 鑑賞券管理明細番号
    KNSHKNHMBI_UNIP: string; // 鑑賞券販売単価
    MVITCKTHIKYFTNTSURY_UNIP: string; // ムビチケ配給負担手数料単価
    MVITCKTKGYFTNTSURY_UNIP: string; // ムビチケ興行負担手数料単価
    MVITCKTUSRTSURY_UNIP: string; // ムビチケユーザー手数料単価
    SHHZI_RT: string; // 消費税率
    SHHZI_TYP: string; // 消費税区分
    SHHZI_UNIP: string; // 消費税単価
    KNYMI_NUM: string; // 購入枚数
}
