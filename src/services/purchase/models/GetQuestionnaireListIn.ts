
import { BaseIn } from '../../../common/models/BaseIn';

/**
 * GetQuestionnaireListIn
 */
export class GetQuestionnaireListIn extends BaseIn {
    /**
     * 作品コード
     */
    public skhnCd: string;

    /**
     * 販売区分（00：前売券／01：当日券）
     */
    public hmbiTyp: string;
}
