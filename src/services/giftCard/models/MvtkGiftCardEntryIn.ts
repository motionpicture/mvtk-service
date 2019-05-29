import { BaseIn } from '../../../common/models/BaseIn';

/**
 * MvtkGiftCardEntryIn
 */
export class MvtkGiftCardEntryIn extends BaseIn {
    /**
     * ギフトカードID情報
     */
    public MVTKGFTCRD_INFO_IN: {
        MvtkgftcrdInfoIn: {
            /**
             * ギフトカード決済管理番号
             */
            GFTCRDKSSIKNR_NO: string;
            /**
             * ムビチケギフトカードPINコード
             */
            MVTKGFTCRDPIN_CD: string;
            /**
             * ムビチケギフトカードID
             */
            MVTKGFTCRD_ID: string;
            /**
             * 利用金額
             */
            RYUKNGK: string;
        }[];
    };
    /**
     * ご利用金額
     */
    public DVC_TYP: string;

    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        // return {
        //     MVTKGFTCRD_INFO_IN: {
        //         MvtkgftcrdInfoIn: this.MVTKGFTCRD_INFO_IN.MvtkgftcrdInfoIn.map((info) => {
        //             return {
        //                 GFTCRDKSSIKNR_NO: info.GFTCRDKSSIKNR_NO,
        //                 MVTKGFTCRDPIN_CD: info.MVTKGFTCRDPIN_CD,
        //                 MVTKGFTCRD_ID: info.MVTKGFTCRD_ID,
        //                 RYUKNGK: info.RYUKNGK,
        //                 targetNSAlias: 'tns',
        //                 // tslint:disable-next-line:no-http-string max-line-length
        //                 targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.MvtkGiftCard.MvtkGiftCardSvc.MvtkGiftCardEntryModel'
        //             };
        //         }),
        //         targetNSAlias: 'q4',
        //         // tslint:disable-next-line:no-http-string max-line-length
        //         targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.MvtkGiftCard.MvtkGiftCardSvc.MvtkGiftCardEntryModel'
        //     },
        //     DVC_TYP: this.DVC_TYP
        // };

        // パラメータの順序が異なるとエラーになるので注意
        let message = `
        <tns:MvtkGiftCardEntry>
            <tns:MVTKGFTCRD_INFO_IN>
        `;
        for (const info of this.MVTKGFTCRD_INFO_IN.MvtkgftcrdInfoIn) {
            message += `
                <q4:MvtkgftcrdInfoIn>
                    <q4:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q4:GFTCRDKSSIKNR_NO>
                    <q4:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q4:MVTKGFTCRDPIN_CD>
                    <q4:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q4:MVTKGFTCRD_ID>
                    <q4:RYUKNGK>${info.RYUKNGK}</q4:RYUKNGK>
                </q4:MvtkgftcrdInfoIn>
        `;
        }

        message += `
            </tns:MVTKGFTCRD_INFO_IN>
            <tns:DVC_TYP>${this.DVC_TYP}</tns:DVC_TYP>
        </tns:MvtkGiftCardEntry>
        `;

        return { _xml: message };
    }
}
