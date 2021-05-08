import path from 'path';

describe('E2Eテスト', () => {
    beforeEach(async () => {
        await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);
    });

    it('ページのタイトルが表示される', async () => {
        await page.waitForSelector('#title', { visible: true });
        await expect(page).toMatchElement('#title', { text: 'ページタイトル' });
    });
});
