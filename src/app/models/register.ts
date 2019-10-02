import { Subscription } from './subscription.enum';

export interface Register {
    username: string;
    password: string;
    subscription: Subscription;
    promotions: boolean;
}
