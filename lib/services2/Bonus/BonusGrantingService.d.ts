import { Service } from '../../common/Service';
import { IPreserveCodeIn } from './models/PreserveCodeIn';
import { PreserveCodeResult } from './models/PreserveCodeResult';
/**
 * BonusGrantingService
 * @extends {Service}
 */
export declare class BonusGrantingService extends Service {
    /**
     * 特典コード確保
     */
    preserveCode(params: IPreserveCodeIn): Promise<{
        response: any;
        result: PreserveCodeResult;
    }>;
}
