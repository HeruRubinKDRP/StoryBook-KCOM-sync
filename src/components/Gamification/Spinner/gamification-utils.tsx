// gamification utils.ts
import { Promotion } from './Promotion';

export function getRandomWeightedIndex(promotions: Promotion[]): number {
    const totalWeight = promotions.reduce((acc, p) => acc + p.weight, 0);
    const randomWeight = Math.random() * totalWeight;

    let weightSum = 0;
    for (let i = 0; i < promotions.length; i++) {
        weightSum += promotions[i].weight;
        if (randomWeight <= weightSum) {
            return i;
        }
    }

    return 0;
}
