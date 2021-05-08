import path from 'path';

describe('スナップショットテスト', () => {
    beforeEach(async () => {
        await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);
    });

    it('スナップショットテスト', async () => {
        await page.waitForSelector('#title', { visible: true });
        expect(await page.content()).toMatchSnapshot();
    });
});
