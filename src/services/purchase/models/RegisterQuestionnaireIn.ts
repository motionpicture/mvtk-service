import { BaseIn } from '../../../common/models/BaseIn';

/**
 * RegisterQuestionnaireIn
 */
export class RegisterQuestionnaireIn extends BaseIn {
    /**
     * 作品コード
     */
    public skhnCd: string;

    /**
     * 購入管理番号
     */
    public knyknrNo: string;

    /**
     * アンケート回答情報(Item Array)
     */
    public qustinnarkitInfo: ArrayOfQustinnarkitInfo;

    /**
     * 購入者コード
     */
    public knyshCd: string;

    /**
     * 期待コメント本文
     */
    public kticmmntTxt: string;

    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        return {
            skhnCd: this.skhnCd,
            knyknrNo: this.knyknrNo,
            qustinnarkitInfo: {
                QustinnarkitInfo: this.qustinnarkitInfo !== undefined ? this.setQustinnarkitInfo() : undefined,
                targetNSAlias: 'q19',
                // tslint:disable-next-line:no-http-string max-line-length
                targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterQuestionnaireModel'
            },
            knyshCd: this.knyshCd,
            // tslint:disable-next-line:max-line-length
            kticmmntTxt: this.kticmmntTxt !== undefined && this.kticmmntTxt !== null && this.kticmmntTxt !== '' ? this.kticmmntTxt : undefined
        };

        //         let message = `
        // <tns:RegisterQuestionnaire>
        //     <tns:skhnCd>${this.skhnCd}</tns:skhnCd>
        //     <tns:knyknrNo>${this.knyknrNo}</tns:knyknrNo>
        //     <tns:qustinnarkitInfo>
        // `;

        //         if (this.qustinnarkitInfo === undefined) {
        //             message += `
        //         <q19:QustinnarkitInfo/>
        // `;

        //         } else {
        //             // 回答情報があれば追加
        //             const qustinnarkitInfos = this.qustinnarkitInfo.QustinnarkitInfo;

        //             if (Array.isArray(qustinnarkitInfos) && qustinnarkitInfos.length > 0) {
        //                 for (const qustinnarkitInfo of qustinnarkitInfos) {
        //                     message += `
        //         <q19:QustinnarkitInfo>
        //             <q19:KITHSHK_TYP>${qustinnarkitInfo.KITHSHK_TYP}</q19:KITHSHK_TYP>
        //             <q19:KJTSKIT_TXT>${qustinnarkitInfo.KJTSKIT_TXT}</q19:KJTSKIT_TXT>
        //             <q19:QUSTINNARSTSMN_NO>${qustinnarkitInfo.QUSTINNARSTSMN_NO}</q19:QUSTINNARSTSMN_NO>
        //             <q19:SNTKSHKQUSTINNARKIT_INFO>
        // `;

        //                     // 選択肢情報があれば追加
        //                     const sntkshkqustinnarkitInfos = qustinnarkitInfo.SNTKSHKQUSTINNARKIT_INFO.SntkshkqustinnarkitInfo;

        //                     if (Array.isArray(sntkshkqustinnarkitInfos) && sntkshkqustinnarkitInfos.length > 0) {
        //                         for (const sntkshkqustinnarkitInfo of sntkshkqustinnarkitInfos) {
        //                             message += `
        //                 <q19:SntkshkqustinnarkitInfo>
        //                     <q19:SNTKSH_NO>${sntkshkqustinnarkitInfo.SNTKSH_NO}</q19:SNTKSH_NO>
        //                 </q19:SntkshkqustinnarkitInfo>
        // `;
        //                         }
        //                     } else {
        //                         message += `
        //                 <q19:SntkshkqustinnarkitInfo/>
        // `;
        //                     }

        //                     message += `
        //             </q19:SNTKSHKQUSTINNARKIT_INFO>
        //         </q19:QustinnarkitInfo>
        // `;
        //                 }

        //             } else {
        //                 message += `
        //         <q19:QustinnarkitInfo/>
        // `;

        //             }
        //         }

        //         message += `
        //     </tns:qustinnarkitInfo>
        //     <tns:knyshCd>${this.knyshCd}</tns:knyshCd>
        // `;

        //         if (this.kticmmntTxt !== undefined && this.kticmmntTxt !== null && this.kticmmntTxt !== '') {
        //             message += `
        //     <tns:kticmmntTxt>${this.kticmmntTxt}</tns:kticmmntTxt>
        // `;
        //         }

        //         message += `
        // </tns:RegisterQuestionnaire>
        // `;

        //         return message;
    }

    private setQustinnarkitInfo(): any[] | undefined {

        const setSntkshkqustinnarkitInfos = (sntkshkqustinnarkitInfos: SntkshkqustinnarkitInfo[]): any => {
            return {
                SntkshkqustinnarkitInfo: sntkshkqustinnarkitInfos.map((info) => {
                    return {
                        SNTKSH_NO: info.SNTKSH_NO,
                        targetNSAlias: 'tns',
                        // tslint:disable-next-line:no-http-string max-line-length
                        targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterQuestionnaireModel'
                    };
                }),
                targetNSAlias: 'tns',
                // tslint:disable-next-line:no-http-string max-line-length
                targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterQuestionnaireModel'
            };
        };

        // 回答情報があれば追加
        const qustinnarkitInfos = this.qustinnarkitInfo.QustinnarkitInfo;
        if (Array.isArray(qustinnarkitInfos) && qustinnarkitInfos.length > 0) {
            return qustinnarkitInfos.map((qustinnarkitInfo) => {
                // 選択肢情報があれば追加
                const sntkshkqustinnarkitInfos = qustinnarkitInfo.SNTKSHKQUSTINNARKIT_INFO.SntkshkqustinnarkitInfo;

                return {
                    KITHSHK_TYP: qustinnarkitInfo.KITHSHK_TYP,
                    KJTSKIT_TXT: qustinnarkitInfo.KJTSKIT_TXT,
                    QUSTINNARSTSMN_NO: qustinnarkitInfo.QUSTINNARSTSMN_NO,
                    // tslint:disable-next-line:max-line-length
                    SNTKSHKQUSTINNARKIT_INFO: Array.isArray(sntkshkqustinnarkitInfos) && sntkshkqustinnarkitInfos.length > 0 ? setSntkshkqustinnarkitInfos(sntkshkqustinnarkitInfos) : undefined,
                    targetNSAlias: 'tns',
                    // tslint:disable-next-line:no-http-string max-line-length
                    targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.Purchase.PurchaseSvc.RegisterQuestionnaireModel'
                };
            });
        } else {
            return undefined;
        }
    }
}

export interface ArrayOfQustinnarkitInfo {
    QustinnarkitInfo: QustinnarkitInfo[];
}

export interface QustinnarkitInfo {
    /**
     * 回答方式区分
     */
    KITHSHK_TYP: string;
    /**
     * 記述回答本文
     */
    KJTSKIT_TXT: string;
    /**
     * アンケート設問番号
     */
    QUSTINNARSTSMN_NO: string;
    /**
     * 選択式アンケート回答情報(itemArray)
     */
    SNTKSHKQUSTINNARKIT_INFO: ArrayOfSntkshkqustinnarkitInfo;
}

export interface ArrayOfSntkshkqustinnarkitInfo {
    SntkshkqustinnarkitInfo: SntkshkqustinnarkitInfo[];
}

export interface SntkshkqustinnarkitInfo {
    /**
     * 選択肢番号
     */
    SNTKSH_NO: string;
}
