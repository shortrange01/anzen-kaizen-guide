import path from 'path';

import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

// しきい値の設定
const toMatchImageSnapshot = configureToMatchImageSnapshot({
    failureThreshold: 0.05,
    failureThresholdType: 'percent',
});
expect.extend({ toMatchImageSnapshot });

describe('ビジュアルテスト', () => {
    beforeEach(async () => {
        await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);
    });

    it('HTML/CSSを含めた見た目が正しい', async () => {
        await page.waitForSelector('#title', { visible: true });
        expect(await page.screenshot()).toMatchImageSnapshot();
    });
});
